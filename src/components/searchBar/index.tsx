import THEMES from "../../styles/theme";
import * as St from "./styles";

import { MdSearch } from "react-icons/md";

const SearchBar: React.FC = () => {
  return (
    <St.Content>
      <St.InputContainer>
        <MdSearch size={22} color={THEMES.colors.secondary} />
        <St.Input placeholder="Search your grocery products etc..." />
      </St.InputContainer>
    </St.Content>
  );
};

export default SearchBar;
