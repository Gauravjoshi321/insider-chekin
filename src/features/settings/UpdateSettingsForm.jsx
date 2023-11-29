import styled from 'styled-components';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import FormRow from "../../ui/FormRow"
import useGetSettings from './useGetSettings';
import Spinner from "../../ui/Spinner";

const Label = styled.label`
  font-weight: 500;
`;

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useGetSettings();

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow>
        <Label>Minimum nights/booking</Label>
        <Input type='number' id='min-nights' defaultValue={minBookingLength} />
      </FormRow>

      <FormRow>
        <Label>Maximum nights/booking</Label>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} />
      </FormRow>

      <FormRow>
        <Label>Maximum guests/booking</Label>
        <Input type='number' id='max-guests' defaultValue={maxGuestsPerBooking} />
      </FormRow>

      <FormRow>
        <Label>Breakfast price</Label>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
