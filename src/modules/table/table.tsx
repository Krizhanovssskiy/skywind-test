import { Container } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Switch, Button } from '@material-ui/core';
import {TableRowHeader, TableRowItem} from "../../components/table-row"

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

const CustomizedTables = (props: object) => {
  const classes = useStyles();

  return (
    <section>
      <Container>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRowHeader />
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRowItem key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </section>
  );
}

export default CustomizedTables;
