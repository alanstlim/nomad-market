import * as St from './styles';

interface LoadingProps {
  show?: 'true' | 'false';
}

const Loading: React.FC<LoadingProps> = ({ show = 'false' }) => {
  return (
    <>
      {show === 'true' && (
        <St.Container data-testid="loading">
          <St.Spinner />
        </St.Container>
      )}
    </>
  );
};

export default Loading;
