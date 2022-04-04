import Table from "./components/Table";
import RowList from "./components/RowList";
import CreateForm from "./components/CreateForm";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="jumbotron text-center">
      <Table>
        <RowList />
      </Table>
      <CreateForm />
      <Modal />
    </div>
  );
}

export default App;
