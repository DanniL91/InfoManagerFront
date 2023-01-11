import React from 'react';
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
import {useDispatch} from "react-redux";
import { AddPersons } from '../redux/actions';

const docTypes = [
  {
    value: 'CC',
    label: 'CC',
  },
  {
    value: 'CE',
    label: 'CE',
  },
  {
    value: 'TI',
    label: 'TI',
  },
  {
    value: 'PA',
    label: 'PA',
  },
];

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


export const AddPerson = () => {

  const [state, setState] = React.useState({
    documentType:"", 
    documentNumber:"", 
    first_name:"", 
    second_name:"", 
    lastName:"", 
    hobbie:""
  })

  const {documentNumber, first_name, second_name, lastName, hobbie} = state;
  const [num, setNum] = React.useState();
  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if(!regex.test(e.target.value)){
      setNum("");
    }
    if (e.target.value === "" || regex.test(e.target.value)) {
      setNum(e.target.value);
      handleInputChange(e);

    }
  };
  let dispatch = useDispatch();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    console.log(name)
    console.log(value)
    setState ({ ...state, [name]: value});
  }
  const [error, setError] = React.useState();
  const handleSend = (e) => {
    console.log(state)
    e.preventDefault();
    if (!first_name || !documentNumber || !lastName){
      setError("Please verify the information")
    }else{
      console.log(state)
      dispatch(AddPersons(state));
      setError("");
    }
  }

  return (
    <Box sx={style}>
    <InputLabel style={({ height: "10vh" }) }>Create Person</InputLabel>
    <InputLabel style={({ height: "10vh" }) }>{error}</InputLabel>
    <div>
      <FormControl fullWidth sx={{ m: 1, width: '10ch' }} variant="standard">
      <Select
          label="Document Type"
          defaultValue="CC"
          variant="standard"
          name="documentType"
          id="document-type"
          onChange ={handleInputChange}
        >
          {docTypes.map((option) => (
            <MenuItem  key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Document Number</InputLabel>
        <Input
          type="text"
          required
          onChange={(e) => handleChange(e)}
          name="documentNumber"
          value={num}
          inputProps={{ maxLength: 12 }}
          startadornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">First Name</InputLabel>
        <Input
          inputProps={{ maxLength: 50 }}
          name="first_name"
          startadornment={<InputAdornment position="start"></InputAdornment>}
          onChange ={handleInputChange}
          value={first_name}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Second Name</InputLabel>
        <Input
          inputProps={{ maxLength: 50 }}
          name="second_name"
          startadornment={<InputAdornment position="start"></InputAdornment>}
          onChange ={handleInputChange}
          value={second_name}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Last Name</InputLabel>
        <Input
          inputProps={{ maxLength: 100 }}
          name="lastName"
          startadornment={<InputAdornment position="start"></InputAdornment>}
          onChange ={handleInputChange}
          value={lastName}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Hobbie</InputLabel>
        <TextField
          multiline
          rows={4}
          inputProps={{ maxLength: 200 }}
          name="hobbie"
          variant="standard"
          startadornment={<InputAdornment position="start"></InputAdornment>}
          onChange ={handleInputChange}
          value={hobbie}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <IconButton  onClick={handleSend}><CheckCircleOutlineRoundedIcon style={{ fontSize: "60px", color: "#43a047"  }}/></IconButton>
      </FormControl>
    </div>
  </Box>
  )
}
export default AddPerson;