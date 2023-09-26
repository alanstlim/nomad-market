import { ProductType } from 'stores/products';
import * as St from './styles';

import { MdOutlineAdd, MdRemove } from 'react-icons/md';

type CardProps = {
  data: ProductType;
  onClick?: () => void;
  onPlusClickButton?: () => void;
  onMinuslickButton?: () => void;
  variant?: 'positive' | 'negative';
};

const Card: React.FC<CardProps> = ({
  onClick,
  onPlusClickButton,
  onMinuslickButton,
  data,
  variant = 'positive',
}) => {
  return (
    <St.Content onClick={onClick}>
      {data.quantity > 0 && (
        <St.QuantityContent>
          <span>Qt:</span>
          <St.Quantity>{data.quantity}</St.Quantity>
        </St.QuantityContent>
      )}

      {data.image && <St.Image src={data.image} alt={data.name} />}
      <St.Title>{data.name}</St.Title>
      <St.Description>{data.description}</St.Description>
      <St.BottomContainer>
        <St.Price>${data.price * (data.quantity ?? 1)}</St.Price>
        {variant === 'negative' && (
          <St.Button onClick={onMinuslickButton}>
            <MdRemove size={18} color="white" />
          </St.Button>
        )}
        <St.Button onClick={onPlusClickButton}>
          <MdOutlineAdd size={18} color="white" />
        </St.Button>
      </St.BottomContainer>
    </St.Content>
  );
};

export default Card;
