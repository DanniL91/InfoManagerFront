import React, {useEffect, useState} from 'react';

import { Card, Stack, Typography, Container, TableHead } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import PersonRemoveRoundedIcon from '@mui/icons-material/PersonRemoveRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import { useDispatch, useSelector } from 'react-redux';
import { requestOperation, loadPersons, saveData, setRequestError, setSucces } from '../redux/actions';
import Modal from '@mui/material/Modal';
import AddPerson from '../components/AddPerson';
import EditPerson from '../components/EditPerson';
import AlertDialogError from './DialogError'
import DialogSucces from './DialogSucces'
import DialogConfirm from './DialogConfirm'


function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };    
  
  const columns = [
    { id: 'documentType', label: 'Document Type', minWidth: 110 },
    { id: 'documentNumber', label: 'Document Number', minWidth: 120 },
    { id: 'fullName', label: 'Name', minWidth: 160 },
    { id: 'lastName', label: 'Last Name', minWidth: 160 },
    { id: 'hobbie', label: 'Hobbie', minWidth: 150 },
    { id: 'update', label: '', minWidth: 50 },
    { id: 'delete', label: '', minWidth: 50 }
  ];


const Persons = () => {
    let dispatch = useDispatch();
    const {persons, error, result, confirm} = useSelector(state => state.data)
    const [modalInsertar, setModalInsertar]=useState(false);
    const [modalEditar, setModalEditar]=useState(false);
    const [state, setState] = React.useState({})
    useEffect(() => {
     dispatch(setRequestError(null));
   }, [])
    useEffect(() => {
      dispatch(setSucces(null));
    }, [])
    useEffect(() => {
      dispatch(setRequestError(null));
    }, [])
    useEffect(() => {
      dispatch(saveData(null));
    }, [])
    useEffect(() => {
        dispatch(requestOperation(null));
    }, [])
    useEffect(() => {
      dispatch(loadPersons());
    }, [])

    const abrirCerrarModalInsertar=()=>{
      setModalInsertar(!modalInsertar);
    }
    const abrirCerrarModalEditar=(person)=>{
      setModalEditar(!modalEditar);
        setState ({ ...state, person});
        dispatch(saveData(person))
    }
    


    const handleDelete =(data)=>{
          dispatch(requestOperation("Si"))
          dispatch(saveData(data))
    }

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - persons.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

        return  (   
        <>  
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
            <Typography variant="h4" gutterBottom>
              Persons
            </Typography>
            <IconButton  onClick={() => abrirCerrarModalInsertar()}><PersonAddAlt1RoundedIcon style={{ fontSize: "60px", color: "#43a047"  }}/></IconButton>
          </Stack>
          <Card>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
                <TableBody>
                {persons && persons.map((row) =>(
                    <TableRow key={row.documentNumber}>
                        <TableCell style={{ width: 100 }} align="left">{row.documentType}</TableCell>
                        <TableCell style={{ width: 130 }} align="left">{row.documentNumber}</TableCell>
                        <TableCell style={{ width: 130 }} align="left">{row.first_name + " " + row.second_name}</TableCell>
                        <TableCell style={{ width: 130 }} align="left">{row.lastName}</TableCell>
                        <TableCell style={{ width: 170 }} align="left">{row.hobbie}</TableCell>
                        <TableCell style={{ width: 50 }} align="left"><IconButton onClick={() => abrirCerrarModalEditar(row)}><CreateRoundedIcon style={{ fontSize: "30px", color: "#fbc02d"  }}/></IconButton></TableCell>
                        <TableCell style={{ width: 50 }} align="left"><IconButton onClick={() => handleDelete(row)}><PersonRemoveRoundedIcon style={{ fontSize: "30px", color: "#d50000"  }}/></IconButton></TableCell>     
                    </TableRow>
                ))}
                {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                    </TableRow>
                )}
                </TableBody>
                <TableFooter>
                <TableRow>
                    <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={persons.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: {
                        'aria-label': 'rows per page',
                        },
                        native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                    />
                </TableRow>
                </TableFooter>
            </Table>
            </TableContainer>
          </Card>
          <Modal
        open={modalInsertar}
        onClose={abrirCerrarModalInsertar}
      >
            <AddPerson  setModalInsertar ={setModalInsertar}/>
          </Modal>
          <Modal
        open={modalEditar}
        onClose={abrirCerrarModalEditar}
      >
            <EditPerson setModalEditar={setModalEditar} />
          </Modal>
          {error ? <AlertDialogError /> : null}
          {result ? <DialogSucces /> : null}
          {confirm ? <DialogConfirm /> : null}
        </Container>
      </>
    )}
export default Persons;