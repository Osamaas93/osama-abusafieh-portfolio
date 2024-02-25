import styled from "styled-components";
import FrontendDevelopment from "./FrontendDevelopment";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding-block: 50px;
  padding: 50px 20px;
`;

const Home = () => {
  return <FrontendDevelopment />;
};

export default Home;
