import { Link } from "react-router-dom";
import THEMES from "../../styles/theme";
import * as St from "./styles";
import {
  MdViewModule,
  MdManageAccounts,
  MdShoppingBasket,
} from "react-icons/md";

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
          <Link to="/">
            <St.ItemButton>
              <St.ItemContainer>
                <MdViewModule size={32} color={THEMES.colors.secondary} />
                <St.ItemTitle>Catalogue</St.ItemTitle>
              </St.ItemContainer>
            </St.ItemButton>
          </Link>
          <Link to="/basket">
            <St.ItemButton>
              <St.ItemContainer>
                <MdShoppingBasket size={32} color={THEMES.colors.secondary} />
                <St.ItemTitle>Basket</St.ItemTitle>
              </St.ItemContainer>
            </St.ItemButton>
          </Link>
          <Link to="/management">
            <St.ItemButton>
              <St.ItemContainer>
                <MdManageAccounts size={32} color={THEMES.colors.secondary} />
                <St.ItemTitle>Management</St.ItemTitle>
              </St.ItemContainer>
            </St.ItemButton>
          </Link>
        </div>
      </St.Menu>
    </St.Content>
  );
};

export default SideBar;
