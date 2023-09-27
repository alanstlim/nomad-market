import Loading from 'components/Loading';
import { createContext, useContext, useState } from 'react';

interface SpinnerContextType {
  loading: 'true' | 'false';
  setLoading: (b: 'true' | 'false') => void;
}

export const SpinnerContext = createContext({} as SpinnerContextType);

export const SpinnerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState<'true' | 'false'>('false');

  return (
    <SpinnerContext.Provider value={{ loading, setLoading }}>
      {children}
      <Loading show={loading} />
    </SpinnerContext.Provider>
  );
};

export const useSpinner = () => {
  return useContext(SpinnerContext);
};
