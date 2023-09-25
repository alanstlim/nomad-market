import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import useProductsStore from "../../stores/products";
import * as St from "./styles";

const Home: React.FC = () => {
  const products = useProductsStore((state) => state.products);
  return (
    <St.Content>
      <St.Title>Products</St.Title>
      <SearchBar />

      <St.Catalog>
        {products?.map((product) => (
          <Card data={product} />
        ))}
      </St.Catalog>
    </St.Content>
  );
};

export default Home;
