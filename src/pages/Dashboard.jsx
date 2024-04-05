import styled, { css } from "styled-components";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
// import Row from "../ui/Row";

const Row = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

function Dashboard() {

  return (
    <>
      <Row>
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
