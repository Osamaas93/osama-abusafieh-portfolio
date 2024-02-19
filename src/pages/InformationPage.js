import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { myInformation } from "../utls/myInfotmation";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "400px",
  maxHeight: "100%",
});
const ImgBackground = styled.div`
  display: flex;
  width: 430px;
  height: 430px;
  flex-shrink: 0;
  border-radius: 528px;
  background: #444;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.8);
`;

const Title = styled.h2`
  font-size: 2rem;
  color: var(--brandSecondary);
  font-weight: 700;
`;

const Description = styled.h4`
  font-size: 1.2rem;
  color: var(--bodyText);
  font-weight: 500;
`;

const InformationPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <ImgBackground>
          <Img
            alt="complex"
            src={`${process.env.PUBLIC_URL}/assets/frontend-img.png`}
          />
        </ImgBackground>
      </Grid>
      <Grid
        item
        xs={12}
        sm
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Title>{myInformation.frontend.title}</Title>
            <Description variant="body2" gutterBottom>
              {myInformation.frontend.description}
            </Description>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InformationPage;
