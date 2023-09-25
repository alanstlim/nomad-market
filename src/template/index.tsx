import { Outlet } from 'react-router-dom';
import SideBar from 'components/SideBar';
import Modal from 'components/Modal';
import Container from 'components/Container';

import * as St from './styles';

const Template: React.FC = () => {
  return (
    <St.MainContent>
      <Modal />
      <SideBar />
      <St.Content>
        <Container>
          <Outlet />
          {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        </Container>
      </St.Content>
    </St.MainContent>
  );
};

export default Template;
