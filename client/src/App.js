import s from './App.module.css';
import { useChatSocket } from './hooks/useChatSocket';
import { Tickers } from './components/tickers/Tickers';
import { Forms } from './components/forms/Forms';
import { Header } from './components/header/Header';

function App() {
  useChatSocket();

  return (<div className={s.App}>
    <Header />
    <Forms />
    <Tickers />

  </div>);
}

export default App;
