import styled from "styled-components";
import { useState } from "react";

import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers"
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import useCreateCabin from "./useCreateCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

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
  const [showEditForm, setShowEditForm] = useState(false);
  const { isDeleting, mutate: deleteMutate } = useDeleteCabin();
  const { isCreating, createMutate } = useCreateCabin();

  const { id, image, name, maxCapacity, regularPrice, discount, description } = cabin;

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
    <>
      <TableRow>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits upto {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>

        <div>
          <button disabled={isCreating} onClick={handleDuplicate}><HiSquare2Stack /></button>
          <button onClick={() => setShowEditForm(value => !value)}><HiPencil /></button>
          <button onClick={() => deleteMutate(id)} disabled={isDeleting}><HiTrash /></button>
        </div>
      </TableRow>

      {showEditForm && <CreateCabinForm cabinEdit={cabin} onCloseEditModal={() => setShowEditForm(showEditForm => !showEditForm)} />}
    </>
  )
}

export default CabinRow;