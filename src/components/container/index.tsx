import * as St from "./styles";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <St.Content>{children}</St.Content>;
};

export default Container;
