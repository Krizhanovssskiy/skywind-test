import { v4 as uuidv4 } from 'uuid';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Switch, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from "./table.module.scss";


const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);


function createData(id: string ,timer: number, name: string,  status: boolean) {
  return { id, timer, name, status };
}

const rows = [
  createData(uuidv4(), 0, 'Vladimir', false),
  createData(uuidv4(), 0, 'Nikita', false),
  createData(uuidv4(), 0, 'Max', false),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Elapsed time</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right"> Change Status</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.timer}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell className={row.status ? styles.active : styles.inActive} align="right">{row.status ? "Active" : "Inactive"}</StyledTableCell>
              <StyledTableCell align="right">
                <Switch
                    // checked={state.checkedB}?
                    // onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </StyledTableCell>
              <StyledTableCell align="right">{
                  <Button
                    variant="contained"
                    color="secondary"
                    // className={classes.button}
                    startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
