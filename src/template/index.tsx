import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar";
import SearchBar from "../components/searchBar";
import Container from "../components/container";

import * as St from "./styles";

const Template: React.FC = () => {
  return (
    <St.MainContent>
      <div>
        <SideBar />
      </div>
      <div>
        <SearchBar />
        <Container>
          <Outlet />
          {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        </Container>
      </div>
    </St.MainContent>
  );
};

export default Template;
