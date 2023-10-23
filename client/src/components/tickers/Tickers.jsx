import s from './Tickers.module.css';
import { Ticker } from '../ticker/Ticker';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

export const Tickers = () => {
  const tickers = useSelector(state1 => state1.tickers)

  return(
    <div className= {s.wrapperTickers}>
      {
        tickers?Object.keys(tickers).map(tickerName=> <Ticker key={tickers[tickerName].ticker } ticker={tickers[tickerName]}/>):<CircularProgress/>
      }
    </div>
  )
}
