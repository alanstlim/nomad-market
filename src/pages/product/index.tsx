import { FormProvider, useForm } from 'react-hook-form';
import * as St from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidationProduct } from './validations';
import { ProductType } from 'stores/products';
import ImageInput from 'components/ImageInput';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSpinner } from 'context/SpinnerContext';
import { useEffect, useMemo } from 'react';
import useModalStore from 'stores/modal';
import {
  handleCreateProduct,
  handleGetProductById,
  handleUpdateProduct,
} from 'useCase/products';

export type FormProductData = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const Product: React.FC = () => {
  const { setLoading } = useSpinner();
  const { openModal } = useModalStore();
  const { id } = useParams();
  const methods = useForm<FormProductData>({
    resolver: yupResolver(ValidationProduct),
  });

  const { mutate: mutateCreateProduct, isLoading: loadingCreate } = useMutation(
    handleCreateProduct,
    {
      onSuccess: () => {
        methods.reset();
        openModal({
          title: 'Success',
          variant: 'success',
          message: 'Product registered with success',
        });
      },
      onError: (error: AxiosError) => {
        openModal({
          title: 'Error',
          variant: 'error',
          message: `Error on register product, try again later. ${error.code}`,
        });
      },
    }
  );

  const { mutate: mutateUpdateProduct, isLoading: loadingUpdate } = useMutation(
    handleUpdateProduct,
    {
      onSuccess: () => {
        methods.reset();
        openModal({
          title: 'Success',
          variant: 'success',
          message: 'Product updated with success',
        });
      },
      onError: (error: AxiosError) => {
        openModal({
          title: 'Error',
          variant: 'error',
          message: `Error on updated product, try again later. ${error.code}`,
        });
      },
    }
  );

  const { isLoading: loadingGet } = useQuery({
    queryKey: ['getById', id],
    queryFn: () => {
      if (id) {
        return handleGetProductById(id);
      }

      return {} as ProductType;
    },
    onSuccess: (data) => {
      methods.setValue('name', data?.name);
      methods.setValue('description', data?.description);
      methods.setValue('image', data?.image);
      methods.setValue('price', data?.price);
    },
  });

  const isLoading = useMemo(() => {
    return loadingCreate || loadingGet || loadingUpdate;
  }, [loadingCreate, loadingGet, loadingUpdate]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  const onSubmit = async (data: FormProductData) => {
    if (id) {
      mutateUpdateProduct({ ...data, _id: id, quantity: 1 });
    } else {
      mutateCreateProduct(data);
    }
  };

  return (
    <St.Content>
      <St.Title>Management - {id ? 'Update' : 'Register'}</St.Title>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ImageInput
            title="Product´s Image"
            name="image"
            error={methods.formState.errors.image}
          />
          <St.FormContainer>
            <Input
              name="name"
              placeholder="Name: Strawberry"
              label="Name"
              maxLength={55}
              error={methods.formState.errors.name}
            />
            <Input
              name="price"
              placeholder="Price: $0,00"
              label="Price"
              type="number"
              maxLength={6}
              error={methods.formState.errors.price}
            />
          </St.FormContainer>
          <Input
            name="description"
            placeholder="Description: The strawberry is good to ..."
            label="Description"
            maxLength={125}
            error={methods.formState.errors.description}
          />
          <St.RowContainer>
            <Link to="/management">
              <Button title="Back" type="button" outline disabled={isLoading} />
            </Link>
            <Button
              title={id ? 'Update' : 'Register'}
              type="submit"
              disabled={isLoading}
            />
          </St.RowContainer>
        </form>
      </FormProvider>
    </St.Content>
  );
};

export default Product;
