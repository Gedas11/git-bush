import Table from "./components/Table";
import RowList from "./components/RowList";
import CreateForm from "./components/CreateForm";
import Modal from "./components/Modal";
import {useState} from 'react'
import data from "./data/data.json";

function App() {
  const [crudData, setcrudData]= useState(data)
  const [showModal, setShowModal] = useState(false)
  const onSave = (form) =>{
    const copyData= {...crudData}
    copyData.members.push(form)
    setcrudData(copyData)
  }
  const onDelete = (form) =>{
    const copyData= {...crudData}
    copyData.members.splice(form)
    setcrudData(copyData)
  }
  const handleEdit = (name, age, secretIdentity, power, id) => {
    setShowModal(true);
    setModal({
      name: name,
      age: age,
      secretIdentity: secretIdentity,
      power: power,
      id: id,
    });
  };

  const modal = ()=>{
    setShowModal(true)
  }
  const hideModal = ()=>{
    setShowModal(false)
  }
  return (
    <div className="jumbotron text-center">
      <Table data={crudData}>
        <RowList data={crudData} delete={onDelete}/>
      </Table>
      <CreateForm save={onSave}/>
      <Modal showModal={showModal} showModal={hideModal} showModal={handleEdit}/>
    </div>
  );
}

export default App;
