import * as St from './styles';

type ButtonProps = {
  title: string;
  type: 'button' | 'submit';
  outline?: boolean;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  title,
  type,
  onClick,
  outline = false,
  ...rest
}: ButtonProps) {
  return (
    <St.Container>
      <St.Button
        type={type}
        onClick={onClick}
        {...rest}
        outline={outline ? 'true' : 'false'}
      >
        <St.Tittle>{title}</St.Tittle>
      </St.Button>
    </St.Container>
  );
}

export default Button;
