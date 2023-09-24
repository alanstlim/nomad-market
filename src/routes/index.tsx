import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Template from "../template";
import Product from "../pages/product";
import Management from "../pages/management";

const Router: React.FC = () => {
  return (
    <Routes>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Route path="/" element={<Template showSearch />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="management" element={<Template />}>
        <Route index element={<Management />} />
        <Route path="product" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default Router;
