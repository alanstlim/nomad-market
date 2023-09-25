import { ProductType } from "../../stores/products";
import * as St from "./styles";

import { MdOutlineAdd } from "react-icons/md";

type CardProps = {
  data: ProductType;
  onClick?: () => void;
  onClickButton?: () => void;
};

const Card: React.FC<CardProps> = ({ onClick, onClickButton, data }) => {
  return (
    <St.Content onClick={onClick}>
      {data.image && <St.Image src={data.image} alt={data.name} />}
      <St.Title>{data.name}</St.Title>
      <St.Description>{data.description}</St.Description>
      <St.BottomContainer>
        <St.Price>${data.price}</St.Price>
        <St.ButtonAdd onClick={onClickButton}>
          <MdOutlineAdd size={18} color="white" />
        </St.ButtonAdd>
      </St.BottomContainer>
    </St.Content>
  );
};

export default Card;
