import * as St from "./styles";

import { MdSearch } from "react-icons/md";

const SearchBar: React.FC = () => {
  return (
    <St.Content>
      <MdSearch />
      <input placeholder="Search your grocery products etc..." />
    </St.Content>
  );
};

export default SearchBar;
