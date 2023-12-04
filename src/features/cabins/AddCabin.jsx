import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenForm((isOpenForm) => !isOpenForm)}>
        Add new cabin
      </Button>

      {isOpenForm &&
        <Modal onClose={() => setIsOpenForm(isOpenForm => !isOpenForm)}>
          <CreateCabinForm onCloseModal={() => setIsOpenForm(isOpenForm => !isOpenForm)} />
        </Modal>
      }
    </div>
  )
}

export default AddCabin;