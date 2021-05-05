import { useObserver } from "mobx-react-lite";
import { useRootStore } from "./root-store/RootStateContext";
import Header from "./components/header";
import ModalComponent from "./modules/modal";
import AddUserForm from "./modules/add-user-form";

function App() {

  const { notesStore, popup } = useRootStore()

  const closePopup = () => {
    popup.togllePopup(false)
  }

  const openPopup = () => {
    popup.togllePopup(true)
  }

  return useObserver(() => (
    <div className="App">
      <h1>Hello world!!!</h1>

      <h2>{notesStore.counter}</h2>
      <button onClick={notesStore.incremented}>+1</button>
      <button onClick={notesStore.decremented}>-1</button>

      <h3>{popup.condition ? 'Yes' : 'No'}</h3>

      <button onClick={openPopup}>true</button>
      <button onClick={closePopup}>false</button>

      <div>
        <Header />

        <ModalComponent open={popup.condition} handleClose={popup.togllePopup}>
          <AddUserForm/>
        </ModalComponent>
      </div>

    </div>
  ));
}

export default App;
