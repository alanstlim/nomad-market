import { ProductType } from 'stores/products';
import * as St from './styles';

import { MdOutlineAdd, MdRemove } from 'react-icons/md';

type CardProps = {
  data: ProductType;
  onClick?: () => void;
  onClickButton?: () => void;
  variant?: 'positive' | 'negative';
};

const Card: React.FC<CardProps> = ({
  onClick,
  onClickButton,
  data,
  variant = 'positive',
}) => {
  return (
    <St.Content onClick={onClick}>
      {data.image && <St.Image src={data.image} alt={data.name} />}
      <St.Title>{data.name}</St.Title>
      <St.Description>{data.description}</St.Description>
      <St.BottomContainer>
        <St.Price>${data.price}</St.Price>
        {variant === 'positive' ? (
          <St.Button onClick={onClickButton}>
            <MdOutlineAdd size={18} color="white" />
          </St.Button>
        ) : (
          <St.Button onClick={onClickButton}>
            <MdRemove size={18} color="white" />
          </St.Button>
        )}
      </St.BottomContainer>
    </St.Content>
  );
};

export default Card;
