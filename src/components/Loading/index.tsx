import * as St from './styles';

interface LoadingProps {
  status?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ status = false }) => {
  return (
    <St.Container status={status}>
      <St.Spinner />
    </St.Container>
  );
};

export default Loading;
