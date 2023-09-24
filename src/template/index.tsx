import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import Container from "../components/Container";

import * as St from "./styles";

type TemplateProps = {
  showSearch?: boolean;
};

const Template: React.FC<TemplateProps> = (props) => {
  return (
    <St.MainContent>
      <SideBar />
      <St.Content>
        {props.showSearch && <SearchBar />}
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
