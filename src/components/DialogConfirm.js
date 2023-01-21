import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { deletePerson, setSucces, setRequestError } from '../redux/actions';


export const AlertDialogError = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRequestError(null));
  }, [])
   useEffect(() => {
     dispatch(setSucces(null));
   }, [])

const {confirm, res} = useSelector(state => state.data)

  const [open, setOpen] = React.useState(true);
  
  const handleClose = () => {
    setOpen(false);
  };
  const sendConfirm = () => {
    dispatch(deletePerson(res["documentType"],res["documentNumber"]))
    setOpen(false);
  };
  

  return (
    <div>
      {confirm ? <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() =>sendConfirm()} color="primary" autoFocus>
            Acept
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
          Decline
          </Button>
        </DialogActions>
      </Dialog> : null}
    </div>
  );
}

export default AlertDialogError;