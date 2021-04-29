import { Container } from '@material-ui/core';
import Table from "./components/table"
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Add new User</h1>
        <button>
          <AddCircleOutlineSharpIcon/>
        </button>

        <Table/>
      </Container>
    </div>
  );
}

export default App;
