import { FormProvider, useForm } from "react-hook-form";
import * as St from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

type FormData = {
  name: string;
  description: string;
  price: string;
};

const Product: React.FC = () => {
  const methods = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <St.Content>
      <St.Title>Management - Register</St.Title>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <St.FormContainer>
            <Input name="name" placeholder="Name: Strawberry" label="Name" />
            <Input name="price" placeholder="Price: $0,00" label="Price" />
          </St.FormContainer>
          <Input
            name="description"
            placeholder="Description: The strawberry is good to ..."
            label="Description"
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
