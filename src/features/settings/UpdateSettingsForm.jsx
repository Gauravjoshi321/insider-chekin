import styled from 'styled-components';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import FormRow from "../../ui/FormRow"
import useGetSettings from './useGetSettings';
import Spinner from "../../ui/Spinner";
import useUpdateSetting from './useUpdateSetting';

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

  const { isUpdating, updateSetting } = useUpdateSetting();

  function handleBlur(e, field) {
    const { value } = e.target;
    updateSetting({ [field]: value })
  }

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow>
        <Label>Minimum nights/booking</Label>
        <Input
          type='number'
          id='min-nights'
          disabled={isUpdating}
          defaultValue={minBookingLength}
          onBlur={(e) => handleBlur(e, "minBookingLength")}
        />
      </FormRow>

      <FormRow>
        <Label>Maximum nights/booking</Label>
        <Input
          type='number'
          id='max-nights'
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          onBlur={(e) => handleBlur(e, "maxBookingLength")}
        />
      </FormRow>

      <FormRow>
        <Label>Maximum guests/booking</Label>
        <Input
          type='number'
          id='max-guests'
          disabled={isUpdating}
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleBlur(e, "maxGuestsPerBooking")}
        />
      </FormRow>

      <FormRow>
        <Label>Breakfast price</Label>
        <Input
          type='number'
          id='breakfast-price'
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          onBlur={(e) => handleBlur(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
