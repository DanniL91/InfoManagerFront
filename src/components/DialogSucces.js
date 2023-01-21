import React, {useEffect} from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { requestOperation, setRequestError } from '../redux/actions';

export const DialogSucces = () => {
  let dispatch = useDispatch();

const {result} = useSelector(state => state.data)
useEffect(() => {
  dispatch(setRequestError(null));
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
      {result ? <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Ok"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Successful request
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

export default DialogSucces;