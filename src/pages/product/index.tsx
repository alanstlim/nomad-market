import { FormProvider, useForm } from 'react-hook-form';
import * as St from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidationProduct } from './validations';
import { ProductType } from 'stores/products';
import ImageInput from 'components/ImageInput';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useSpinner } from 'context/SpinnerContext';
import { useEffect } from 'react';
import useModalStore from 'stores/modal';

const Product: React.FC = () => {
  const { setLoading } = useSpinner();
  const { openModal } = useModalStore();
  const methods = useForm<ProductType>({
    resolver: yupResolver(ValidationProduct),
  });

  const handleCreateProduct = async (data: ProductType) => {
    const { data: response } = await axios.post(
      'https://crudcrud.com/api/b843373ced354c5f9c5c84ab64282a67/product',
      data
    );
    return response.data;
  };

  const { mutate, isLoading } = useMutation(handleCreateProduct, {
    onSuccess: () => {
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
  });

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  const onSubmit = async (data: ProductType) => {
    mutate(data);
  };

  return (
    <St.Content>
      <St.Title>Management - Register</St.Title>
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
              maxLength={125}
              error={methods.formState.errors.name}
            />
            <Input
              name="price"
              placeholder="Price: $0,00"
              label="Price"
              type="number"
              maxLength={8}
              error={methods.formState.errors.price}
            />
          </St.FormContainer>
          <Input
            name="description"
            placeholder="Description: The strawberry is good to ..."
            label="Description"
            maxLength={255}
            error={methods.formState.errors.description}
          />
          <St.RowContainer>
            <Link to="/management">
              <Button title="Back" type="button" outline disabled={isLoading} />
            </Link>
            <Button title="Register" type="submit" disabled={isLoading} />
          </St.RowContainer>
        </form>
      </FormProvider>
    </St.Content>
  );
};

export default Product;
