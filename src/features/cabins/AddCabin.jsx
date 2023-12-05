import Button from "../../ui/Button";
import Modal from "../../ui/Modal";


function AddCabin({ opens, name, children }) {
  return (
    <Modal>

      <Modal.Open opens={opens}>
        <Button>Add new Cabin</Button>
      </Modal.Open>

      <Modal.Window name={name}>
        {children}
      </Modal.Window>

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