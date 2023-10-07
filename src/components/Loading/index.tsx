import useLoadingStore from 'stores/loading';
import * as St from './styles';

const Loading: React.FC = () => {
  const showLoading = useLoadingStore((state) => state.showLoading);
  return (
    <>
      {showLoading && (
        <St.Container data-testid="loading">
          <St.Spinner />
        </St.Container>
      )}
    </>
  );
};

export default Loading;
