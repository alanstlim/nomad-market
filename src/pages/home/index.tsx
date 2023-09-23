import Card from "../../components/card";
import * as St from "./styles";

const Home: React.FC = () => {
  return (
    <St.Content>
      <St.Title>Products</St.Title>
      <St.Catalog>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </St.Catalog>
    </St.Content>
  );
};

export default Home;
