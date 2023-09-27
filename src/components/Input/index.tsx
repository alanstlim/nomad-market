import * as St from './styles';
import { FieldError, useFormContext } from 'react-hook-form';

type InputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  error,
  required,
  maxLength = 125,
  ...rest
}) => {
  const { register } = useFormContext();

  return (
    <St.Container data-testid="input">
      {label && <St.Label>{label}</St.Label>}
      <St.Input
        {...register(name, { required })}
        {...rest}
        maxLength={maxLength}
        placeholder={placeholder}
        error={typeof error?.message === 'string' ?? false}
      />
      {error?.message && <St.Error>{error.message}</St.Error>}
    </St.Container>
  );
};

export default Input;
