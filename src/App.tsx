
import {
  createStyles,
  fade,
  Theme,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { Container } from '@material-ui/core';
import Table from "./components/table"
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './App.scss';

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    // '& input:invalid + fieldset': {
    //   borderColor: 'red',
    //   borderWidth: 2,
    // },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Add new User</h1>
        <button>
          <AddCircleOutlineSharpIcon/>
        </button>

        <Table/>

        <form 
        // className={classes.root}
         noValidate autoComplete="off">
          <ValidationTextField
            // className={classes.margin}
            label="CSS validation style"
            required
            variant="outlined"
            defaultValue=""
            id="validation-outlined-input"

          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            // className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default App;
