import * as St from "./styles";

import { MdOutlineAdd } from "react-icons/md";

const Card: React.FC = () => {
  return (
    <St.Content>
      <St.Image
        src="https://static.wixstatic.com/media/8ae8c6_0563d6ac19a24606a7000fef50a89875~mv2.png/v1/fill/w_560,h_382,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/morango.png"
        alt="Nome do produto"
      />
      <St.Title>Strawberry</St.Title>
      <St.Description>Description bla bla bla bla</St.Description>
      <St.BottomContainer>
        <St.Price>$20.10</St.Price>
        <St.ButtonAdd>
          <MdOutlineAdd size={18} color="white" />
        </St.ButtonAdd>
      </St.BottomContainer>
    </St.Content>
  );
};

export default Card;
