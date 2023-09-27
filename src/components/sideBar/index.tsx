import { Link } from 'react-router-dom';
import THEMES from 'styles/theme';
import * as St from './styles';
import {
  MdViewModule,
  MdManageAccounts,
  MdShoppingBasket,
} from 'react-icons/md';
import useMediaQuery from 'utils/mediaQuery';
import logo from 'assets/logo.png';
import logoMobile from 'assets/logoMobile.png';
import { ROUTES } from 'routes/routes';
import { useCallback, useState } from 'react';

const SideBar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 1154px)');
  const [currentPath, setCurrentPath] = useState('/');

  const handlePath = (path: string) => {
    setCurrentPath(path);
  };

  const Icon = useCallback((iconName?: string) => {
    switch (iconName) {
      case 'MdViewModule':
        return <MdViewModule size={32} color={THEMES.colors.secondary} />;
      case 'MdManageAccounts':
        return <MdManageAccounts size={32} color={THEMES.colors.secondary} />;
      case 'MdShoppingBasket':
        return <MdShoppingBasket size={32} color={THEMES.colors.secondary} />;
      default:
        return null;
    }
  }, []);

  return (
    <St.Content data-testid="sidebar">
      <St.Header>
        <St.Logo src={isMobile ? logoMobile : logo} alt="Logo Nomad" />
      </St.Header>
      <St.Menu>
        <div>
          {ROUTES.filter((route) => route.sidebar).map((route, index) => (
            <Link
              to={route.path}
              key={route.title + index}
              onClick={() => handlePath(route.path)}
              style={{ textDecoration: 'none' }}
            >
              <St.ItemButton>
                <St.ItemContainer
                  active={route.path === currentPath ? 'true' : 'false'}
                >
                  {Icon(route.icon)}
                  {!isMobile && <St.ItemTitle>{route.title}</St.ItemTitle>}
                </St.ItemContainer>
              </St.ItemButton>
            </Link>
          ))}
        </div>
      </St.Menu>
    </St.Content>
  );
};

export default SideBar;
