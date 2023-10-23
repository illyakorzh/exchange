import { Alert, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';
import s from './Form.module.css';

export const Form = ({ placeHolder, maxLengthValue, minLengthValue, fn }) => {

  const {
    register, handleSubmit, reset, formState: { errors, }
  } = useForm({ mode: 'onChange' });
  const onSubmit = data => {
    fn(data);
    reset();
  };

  return (<form onSubmit={handleSubmit(onSubmit)} className={s.formWrapper}>
    <div>
      <TextField
        className={s.textField}
        id="outlined-basic"
        label={placeHolder}
        variant="outlined"
        required={true}
        autoComplete="off"
        {...register("value", {
          required: true, maxLength: {
            value: maxLengthValue, message: `max length ${maxLengthValue} characters`
          }, minLength: {
            value: minLengthValue, message: `min length ${minLengthValue} characters `
          }, pattern: {
            value: /^(?!\s).*\S$/, message: 'Value cannot start or end with a space',
          },
        })}
      />

      <Button variant="contained" className={s.button} endIcon={<SendIcon />} type={'submit'}> Send </Button>
    </div>
    {errors.value && <Alert className={s.alert} severity="error">    {errors.value.message}</Alert>}
  </form>);
};
