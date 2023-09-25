import { SpinnerProvider } from './SpinnerContext';

const Contexts = ({ children }: { children: React.ReactNode }) => (
  <SpinnerProvider>{children}</SpinnerProvider>
);

export default Contexts;
