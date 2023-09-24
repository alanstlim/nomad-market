import { FormProvider, useForm } from "react-hook-form";
import * as St from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationProduct } from "./validations";

type FormData = {
  name: string;
  description: string;
  price: string;
};

const Product: React.FC = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(ValidationProduct),
  });
  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <St.Content>
      <St.Title>Management - Register</St.Title>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <St.FormContainer>
            <Input
              name="name"
              placeholder="Name: Strawberry"
              label="Name"
              error={methods.formState.errors.name}
            />
            <Input
              name="price"
              placeholder="Price: $0,00"
              label="Price"
              error={methods.formState.errors.price}
            />
          </St.FormContainer>
          <Input
            name="description"
            placeholder="Description: The strawberry is good to ..."
            label="Description"
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
