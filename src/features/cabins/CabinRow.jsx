import styled from "styled-components";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers"
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";


const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;


function CabinRow({ cabin }) {
  const { isDeleting, mutate: deleteMutate } = useDeleteCabin();
  const { isCreating, createMutate } = useCreateCabin();

  const { id: cabinId, image, name, maxCapacity, regularPrice, discount, description } = cabin;

  function handleDuplicate() {
    createMutate({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description
    })
  }

  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits upto {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>

      <div>

        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />
            <Menus.List id={cabinId}>

              <Menus.Button
                disabled={isCreating}
                onClick={handleDuplicate}>
                <HiSquare2Stack />
                Copy
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button>
                  <HiPencil />
                  Edit
                </Menus.Button>
              </Modal.Open>


              <Modal.Open opens="delete">
                <Menus.Button>
                  <HiTrash />
                  Delete
                </Menus.Button>
              </Modal.Open>

            </Menus.List>


            <Modal.Window name="edit">
              <CreateCabinForm cabinEdit={cabin} onCloseEditModal={close} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabin"
                disabled={isDeleting}
                onConfirm={() => deleteMutate(cabinId)}
              />
            </Modal.Window>

          </Menus.Menu>
        </Modal>

      </div>
    </Table.Row >
  )
}

export default CabinRow;