import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useDispatch, useSelector } from 'react-redux';
import { PutPerson , requestOperation, setRequestError, setSucces} from '../redux/actions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const EditPerson = ({setModalEditar}) => {
  let dispatch = useDispatch();

  const {res} = useSelector(state => state.data)
  useEffect(() => {
    dispatch(setRequestError(null));
  }, [])
   useEffect(() => {
     dispatch(setSucces(null));
   }, [])
   useEffect(() => {
       dispatch(requestOperation(null));
   }, [])

  const [state2, setState2] = React.useState({
    documentType:res["documentType"],
    documentNumber:res["documentNumber"],
    first_name: res["first_name"], 
    second_name:res["second_name"], 
    lastName:res["lastName"], 
    hobbie:res["hobbie"]
  })


  

  const {documentNumber, first_name, second_name, lastName, hobbie} = state2;
  
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState2 ({ ...state2, [name]: value});
  }
  const [error, setError] = React.useState();
  const handleSend = (e) => {

    e.preventDefault();
    if ( !lastName){
      setError("Please verify the information")
    }else {
      dispatch(PutPerson(state2));
      setError("");
    }
    setModalEditar(false)
  }

  return (
    <Box sx={style}>
    <InputLabel style={({ height: "10vh", textAlign:"center", fontWeight:"bold", color: "#000000", fontSize:"26px" }) }>Edit Person</InputLabel>

    <InputLabel style={({ height: "6vh", color:"#d50000" }) }>{error}</InputLabel>
    <div>
      <FormControl fullWidth sx={{ m: 1, width: '10ch' }} variant="standard">
      <Select
          label="Document Type"
          defaultValue="CC"
          variant="standard"
          name="documentType"
          id="document-type"
          disabled={true}
        >
            <MenuItem  value={res['documentType']}>
              {res['documentType']}
            </MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <TextField 
          multiline
          rows={1}
          label="Document Number"
          name="documentNumber"
          value={documentNumber}
          inputProps={{ maxLength: 12 }}
          variant="standard"
          disabled={true}          
        />
      </FormControl>      
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel >First Name</InputLabel>
        <Input
          inputProps={{ maxLength: 50 }}
          name="first_name"
          startadornment={<InputAdornment position="start"></InputAdornment>}
          onChange ={handleInputChange}
          value={first_name}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel >Second Name</InputLabel>
        <Input
          inputProps={{ maxLength: 50 }}
          name="second_name"
          startadornment={<InputAdornment position="start"></InputAdornment>}
          onChange ={handleInputChange}
          value={second_name}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel >Last Name</InputLabel>
        <Input
          inputProps={{ maxLength: 100 }}
          name="lastName"
          startadornment={<InputAdornment position="start"></InputAdornment>}
          onChange ={handleInputChange}
          value={lastName}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <TextField
          multiline
          rows={3}
          inputProps={{ maxLength: 200 }}
          name="hobbie"
          label="Hobbie"
          variant="standard"
          startadornment={<InputAdornment position="start"></InputAdornment>}
          onChange ={handleInputChange}
          value={hobbie}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <IconButton  onClick={e =>handleSend(e)}><CheckCircleOutlineRoundedIcon style={{ fontSize: "60px", color: "#43a047"  }}/></IconButton>
      </FormControl>
    </div>
    
  </Box>
  )
}
export default EditPerson;