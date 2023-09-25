import * as St from './styles';
import { FieldError, useFormContext } from 'react-hook-form';

type InputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  error,
  required,
  ...rest
}) => {
  const { register } = useFormContext();

  return (
    <St.Container>
      {label && <St.Label>{label}</St.Label>}
      <St.Input
        {...register(name, { required })}
        placeholder={placeholder}
        error={typeof error?.message === 'string' ?? false}
        {...rest}
      />
      {error?.message && <St.Error>{error.message}</St.Error>}
    </St.Container>
  );
};

export default Input;
