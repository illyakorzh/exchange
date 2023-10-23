import { useSelector } from 'react-redux';
import s from './Header.module.css';


export const Header = () => {
  const muteState = useSelector(state => state.local);


  return (  <div className={s.container}>

    {muteState.length ? <div className={s.runString} >
      <span >MUTE TICKERS: </span>
    { muteState.map(el => <span key={el}> {el} </span>) } </div>:
    null}

  </div>
    );
};
