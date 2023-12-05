import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";
import Modal from "../../ui/Modal";


function AddCabin() {
  return (
    <Modal>

      <Modal.Open opens="cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>

      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      {/* <Modal.Open opens="table">
        <Button>Add new Cabin</Button>
      </Modal.Open>

      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window> */}

    </Modal>
  )
}

// function AddCabin() {
//   const [isOpenForm, setIsOpenForm] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenForm((isOpenForm) => !isOpenForm)}>
//         Add new cabin
//       </Button>

//       {isOpenForm &&
//         <Modal onClose={() => setIsOpenForm(isOpenForm => !isOpenForm)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenForm(isOpenForm => !isOpenForm)} />
//         </Modal>
//       }
//     </div>
//   )
// }

export default AddCabin;