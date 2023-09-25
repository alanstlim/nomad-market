import { MdDelete, MdModeEdit } from 'react-icons/md';
import Button from 'components/Button';
import THEMES from 'styles/theme';
import * as St from './styles';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSpinner } from 'context/SpinnerContext';
import { handleGetAllProducts } from 'useCase/products';

const Management: React.FC = () => {
  const { setLoading } = useSpinner();

  const { isLoading, data } = useQuery({
    queryKey: ['getAll'],
    queryFn: handleGetAllProducts,
  });

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  return (
    <St.Content>
      <St.Title>Management</St.Title>
      <Link to="/product">
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
                <MdDelete size={24} color={THEMES.colors.error} />
              </St.TD>
            </St.TR>
          ))}
        </tbody>
      </St.Table>
    </St.Content>
  );
};

export default Management;
