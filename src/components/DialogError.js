import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { requestOperation, setSucces } from '../redux/actions';



export const AlertDialogError = () => {
  let dispatch = useDispatch();

const {error} = useSelector(state => state.data)

 useEffect(() => {
   dispatch(setSucces(null));
 }, [])
 useEffect(() => {
     dispatch(requestOperation(null));
 }, [])
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {error ? <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          An error occurred while processing the request
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Acept
          </Button>
        </DialogActions>
      </Dialog> : null}
    </div>
  );
}

export default AlertDialogError;