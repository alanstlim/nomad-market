import { FormProvider, useForm } from "react-hook-form";
import * as St from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationProduct } from "./validations";
import useProductsStore, { ProductType } from "../../stores/products";
import ImageInput from "../../components/ImageInput";

const Product: React.FC = () => {
  const addProduct = useProductsStore((state) => state.addProduct);
  const methods = useForm<ProductType>({
    resolver: yupResolver(ValidationProduct),
  });
  const onSubmit = async (data: ProductType) => {
    addProduct(data);
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
              <Button title="Back" type="button" outline />
            </Link>
            <Button title="Register" type="submit" />
          </St.RowContainer>
        </form>
      </FormProvider>
    </St.Content>
  );
};

export default Product;
