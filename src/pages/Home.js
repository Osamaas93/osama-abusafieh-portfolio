import styled from "styled-components";
import { myInformation } from "../utls/myInfotmation";
import InformationPage from "./InformationPage";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 30px;
  ${"" /*   box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.8); */}
`;

const Home = () => {
  return (
    <Container>
      <InformationPage />
    </Container>
  );
};

export default Home;
