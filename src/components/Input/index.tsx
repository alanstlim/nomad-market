import * as St from "./styles";
import { FieldError, useFormContext } from "react-hook-form";

type InputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({
  name,
  label,
  placeholder,
  error,
  required,
  ...rest
}: InputProps) {
  const { register } = useFormContext();
  return (
    <St.Container>
      {label && <St.Label>{label}</St.Label>}
      <St.Input
        {...register(name, { required })}
        placeholder={placeholder}
        {...rest}
      />
      {error?.message && <span>{error.message}</span>}
    </St.Container>
  );
}

export default Input;
