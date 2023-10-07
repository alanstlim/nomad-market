import { MdDelete, MdModeEdit } from 'react-icons/md';
import Button from 'components/Button';
import THEMES from 'styles/theme';
import * as St from './styles';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { handleDeleteProduct, handleGetAllProducts } from 'useCase/products';
import useModalStore from 'stores/modal';
import { AxiosError } from 'axios';
import useLoadingStore from 'stores/loading';

const Management: React.FC = () => {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const { openModal } = useModalStore();

  const { isLoading: loadingGetAll, data } = useQuery({
    queryKey: ['getAll'],
    queryFn: handleGetAllProducts,
  });

  const handleDelete = async (id: string) => {
    mutateDelete(id);
  };

  const { mutate: mutateDelete, isLoading: loadingDelete } = useMutation(
    handleDeleteProduct,
    {
      onSuccess: () => {
        openModal({
          title: 'Success',
          variant: 'success',
          message: 'Product deleted with success',
        });
      },
      onError: (error: AxiosError) => {
        openModal({
          title: 'Error',
          variant: 'error',
          message: `Error on delete product, try again later. ${error.code}`,
        });
      },
    }
  );

  const isLoading = useMemo(() => {
    return loadingDelete || loadingGetAll;
  }, [loadingDelete, loadingGetAll]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  return (
    <St.Content>
      <St.Title>Management</St.Title>
      <Link to="/product" style={{ textDecoration: 'none' }}>
        <Button title="Register a new product" type="button" />
      </Link>
      <St.Table>
        <St.TableHead>
          <St.TR>
            <St.TH>Image</St.TH>
            <St.TH>Name</St.TH>
            <St.TH>Price</St.TH>
            <St.TH>Description</St.TH>
            <St.TH>Action</St.TH>
          </St.TR>
        </St.TableHead>
        <tbody>
          {data?.map((product) => (
            <St.TR key={product._id}>
              <St.TD>
                <St.Image src={product.image} alt={product.name} />
              </St.TD>
              <St.TD>{product.name}</St.TD>
              <St.TD>{product.price}</St.TD>
              <St.TD>{product.description}</St.TD>
              <St.TD>
                <Link to={`/product/${product._id}`}>
                  <MdModeEdit size={24} color={THEMES.colors.secondary} />
                </Link>
                <MdDelete
                  size={24}
                  color={THEMES.colors.error}
                  onClick={() => handleDelete(product._id)}
                />
              </St.TD>
            </St.TR>
          ))}
        </tbody>
      </St.Table>
    </St.Content>
  );
};

export default Management;
