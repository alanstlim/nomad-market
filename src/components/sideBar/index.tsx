import * as St from "./styles";
import { MdViewModule, MdAttachMoney } from "react-icons/md";

const SideBar: React.FC = () => {
  return (
    <St.Content>
      <St.Header>
        <St.Logo
          src="https://getlogovector.com/wp-content/uploads/2020/11/nomad-homes-logo-vector.png"
          alt="Logo Nomad"
        />
      </St.Header>
      <St.Menu>
        <div>
          <St.ItemButton>
            <St.ItemContainer>
              <MdViewModule size={32} />
              <St.ItemTitle>Catalogue</St.ItemTitle>
            </St.ItemContainer>
          </St.ItemButton>
          <St.ItemButton>
            <St.ItemContainer>
              <MdAttachMoney size={32} />
              <St.ItemTitle>Reduce Area</St.ItemTitle>
            </St.ItemContainer>
          </St.ItemButton>
        </div>
      </St.Menu>
    </St.Content>
  );
};

export default SideBar;
