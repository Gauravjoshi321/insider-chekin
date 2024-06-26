import styled, { css } from "styled-components";

import BookingDataBox from "./BookingDataBox";
// import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useNavigate } from "react-router-dom";
import useReadBookingById from "./useReadBookingById";
import Spinner from "../../ui/Spinner";
import { HiArrowDownOnSquare, HiArrowUpOnSquare } from "react-icons/hi2";
import useCheckout from "../check-in-out/useCheckout";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

const Row = styled.div`
${props => props.type === 'horizontal' && css`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`}

${props => props.type === 'vertical' && css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`}
`;


function BookingDetail() {
  const { booking, isLoading } = useReadBookingById();
  const { checkout, isCheckingOut } = useCheckout();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if (isLoading) return <Spinner />;
  const { status, id: bookingId } = booking;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" &&
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            <HiArrowDownOnSquare /> Check in
          </Button>
        }

        {status === "checked-in" &&
          <Button
            onClick={() => { checkout(bookingId) }}
            disabled={isCheckingOut}
          >
            <HiArrowUpOnSquare /> Check out
          </Button>
        }

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
