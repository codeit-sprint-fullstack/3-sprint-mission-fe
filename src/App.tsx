import './App.css';
import Footer from './layouts/footer/Footer';

type AppProps = {
  children: React.ReactNode;
};

function App({ children }: AppProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default App;
