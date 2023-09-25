import * as yup from "yup";

export const ValidationProduct = yup
  .object({
    name: yup.string().required("Required *"),
    description: yup.string().required("Required *"),
    price: yup
      .number()
      .required("Required *")
      .typeError("You must specify a number"),
    image: yup.string().required("Required *"),
  })
  .required();
