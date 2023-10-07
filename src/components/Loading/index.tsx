import * as St from './styles';

interface LoadingProps {
  show?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ show = false }) => {
  return (
    <>
      {show && (
        <St.Container data-testid="loading">
          <St.Spinner />
        </St.Container>
      )}
    </>
  );
};

export default Loading;
