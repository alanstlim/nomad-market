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
        <St.Item>
          <MdViewModule size={32} />
          <St.ItemTitle>Catalogue</St.ItemTitle>
        </St.Item>
        <St.Item>
          <MdAttachMoney size={32} />
          <St.ItemTitle>Reduce Area</St.ItemTitle>
        </St.Item>
      </St.Menu>
    </St.Content>
  );
};

export default SideBar;
