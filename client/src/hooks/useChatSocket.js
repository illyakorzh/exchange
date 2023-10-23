import { useEffect, } from 'react';
import { useDispatch } from 'react-redux';
import { addTickers } from '../store/reducers/tickersReducer';
import { socket } from '../consts';

export const useChatSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {


    socket.on('connect', () => {
      socket.emit('start');
    });

    socket.on('ticker', (data) => {
        dispatch(addTickers(data));
    });

    socket.on('disconnect', () => {
      console.log('disconnected');
    });

  }, []);

};
