import * as yup from "yup";

export const ValidationProduct = yup
  .object({
    name: yup.string().required("Required *"),
    price: yup.string().required("Required *"),
    description: yup.string().required("Required *"),
  })
  .required();
