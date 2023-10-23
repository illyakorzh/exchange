import { Form } from '../form/Form';
import { socket } from '../../consts';
import s from './Forms.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { muteTickerState, unmuteTickerState } from '../../store/reducers/muteReducer';

export const Forms = () => {
  const dispatch  = useDispatch()
  const addTicker = (data) => {
    socket.emit('add_ticker', { ticker: data.value.toUpperCase() });
  }
  const updateTime = (data) => {
    socket.emit('update_time', { time: data.value.toUpperCase() });
  }
  const muteTicker = (data) => {
   dispatch(muteTickerState(data.value.toUpperCase()))
  }
  const unmuteTicker = (data) => {
    dispatch(unmuteTickerState(data.value.toUpperCase()))
  }
  let state = useSelector(state1 => state1)

  return (
    <div className={s.wrapper}>
      <Form
        placeHolder={"add ticker"}
        maxLengthValue={10}
        minLengthValue={2}
        fn = {  addTicker }
      />

      <Form
        placeHolder={"update time in seconds"}
        maxLengthValue={2}
        minLengthValue={1}
        fn = {  updateTime }
      />

      <Form
        placeHolder={"mute ticker"}
        maxLengthValue={10}
        minLengthValue={2}
        fn = {  muteTicker }
      />

      <Form
        placeHolder={"unmute ticker"}
        maxLengthValue={10}
        minLengthValue={2}
        fn = {  unmuteTicker }
      />
    </div>
  )
}
