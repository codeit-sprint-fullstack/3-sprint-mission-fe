import './App.css';

type AppProps = {
  children: React.ReactNode;
};

function App({ children }: AppProps) {
  return <>{children}</>;
}

export default App;
