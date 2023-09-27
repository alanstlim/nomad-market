import THEMES from 'styles/theme';
import * as St from './styles';

import { MdSearch } from 'react-icons/md';
import useSearchStore from 'stores/search';

const SearchBar: React.FC = () => {
  const setSearchText = useSearchStore((state) => state.setText);
  return (
    <St.Content>
      <St.InputContainer>
        <MdSearch size={22} color={THEMES.colors.secondary} />
        <St.Input
          placeholder="Search your grocery products etc..."
          onChange={(event) => setSearchText(event.target.value)}
        />
      </St.InputContainer>
    </St.Content>
  );
};

export default SearchBar;
