import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Template from "../template";

const Router: React.FC = () => {
  return (
    <Routes>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
