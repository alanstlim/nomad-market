import useModalStore from 'stores/modal';
import * as St from './styles';
import { MdCheckCircle, MdError, MdWarning } from 'react-icons/md';
import THEMES from 'styles/theme';
import Button from 'components/Button';
import { useCallback } from 'react';

const Modal: React.FC = () => {
  const { data, closeModal } = useModalStore();

  const IconVariant = useCallback(() => {
    switch (data.variant) {
      case 'success':
        return <MdCheckCircle size={60} color={THEMES.colors.primary} />;
      case 'error':
        return <MdError size={60} color={THEMES.colors.primary} />;
      default:
        return <MdWarning size={60} color={THEMES.colors.primary} />;
    }
  }, [data.variant]);
  return (
    <>
      {data?.open && (
        <St.Background data-testid="modal">
          <St.Container>
            <St.Title>{data.title}</St.Title>

            {data.component ? (
              <>{data.component}</>
            ) : (
              <>
                {IconVariant()}
                <St.Description>{data?.message}</St.Description>
              </>
            )}
            <Button title="Close" type="button" onClick={closeModal} />
          </St.Container>
        </St.Background>
      )}
    </>
  );
};

export default Modal;
