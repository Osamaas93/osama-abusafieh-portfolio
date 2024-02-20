import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { myInformation } from "../utls/myInfotmation";

const Img = styled("img")`
  && {
    margin: auto;
    display: block;
    max-width: 400px;
    max-height: 100%;
    @media (max-width: 700px) {
      max-width: 300px;
    }
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgBackground = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  width: 430px;
  height: 430px;
  border-radius: 528px;
  background: #444;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.8);
  @media (max-width: 700px) {
    width: 325px;
    height: 325px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: var(--brandSecondary);
  font-weight: 700;
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.h4`
  font-size: 1.2rem;
  color: var(--bodyText);
  font-weight: 500;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

const InformationPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={5}>
        <ImgContainer>
          <ImgBackground>
            <Img
              alt="complex"
              src={`${process.env.PUBLIC_URL}/assets/frontend-img.png`}
            />
          </ImgBackground>
        </ImgContainer>
      </Grid>
      <Grid
        item
        xs={12}
        lg={7}
        container
        direction="column"
        justifyContent="center"
        alignItems="center" // Center the content vertically
      >
        <Grid item>
          <Title>{myInformation.frontend.title}</Title>
          <Description>{myInformation.frontend.description}</Description>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InformationPage;
