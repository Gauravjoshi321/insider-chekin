import styled from "styled-components";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import useCreateCabin from "./useCreateCabin";
import useEditCabin from "./useEditCabin";
import FormRow from "../../ui/FormRow";

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;


function CreateCabinForm({ cabinEdit = {} }) {

  const { createMutate, isCreating } = useCreateCabin();
  const { editMutate, isEditing } = useEditCabin();

  const { id: editId, ...editValues } = cabinEdit;
  const isEditSession = Boolean(editId);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState
  } = useForm({ defaultValues: isEditSession ? editValues : {} });
  const { errors } = formState;


  //---------------------------------
  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    // Contains image from url
    if (isEditSession) {
      editMutate({ newCabinData: { ...data, image }, id: editId }, {
        onSuccess: (data) => {
          // This can also access the data returned by the funtion (dealing with api) called by mutate function...
          console.log(data);
          reset();
        }
      });
    }

    // Contains image from our device
    else {
      createMutate({ ...data, image }, {
        onSuccess: (data) => {
          // This can also access the data returned by the mutate function...
          console.log(data);
          reset();
        }
      });
    }
  }

  // function onError(error) {
  //   // console.log(error);
  // }

  const isWorking = isCreating || isEditing;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      {/* <Form Form onSubmit={handleSubmit(onSubmit, onError)} > */}

      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required."
          })}
        />

        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required.",
            min: {
              value: 1,
              message: "Max capacity can be minimum 1."
            }
          })}
        />

        {errors?.maxCapacity?.message && <Error>{errors.maxCapacity.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required."
          })}
        />

        {errors?.regularPrice?.message && <Error>{errors.regularPrice.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isWorking}
          {...register("discount", {
            required: "This field is required.",
            validate: (value) => +value <= +getValues().regularPrice || "Discount should be lees than or equals to the regular price."
          })}
        />

        {errors?.discount?.message && <Error>{errors.discount.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", { required: "This field is required." })}
        />

        {errors?.description?.message && <Error>{errors.description.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput
          id="image"
          accept="image/*"
          disabled={isWorking}
          {...register("image", {
            required: isEditSession ? false : "This field is required"
          })}
        />

        {errors?.image?.message && <Error>{errors.image.message}</Error>}
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? "Edit cabin" : "Add cabin"}</Button>
      </FormRow>
    </Form >
  );
}

export default CreateCabinForm;
