import React from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import styled from "styled-components";
import useSelectedContent from "./context/context";
import { Link } from "react-router-dom";

const CustomGrid = styled.div`
  @media (max-width: 700px) {
    text-align: center;
  }
`;

const TitleText = styled.h2`
  font-size: 2rem;
  color: var(--brandSecondary);
  font-weight: 700;
  text-align: left;
  @media (max-width: 1000px) {
    font-size: 1.7rem;
  }
`;

const DescriptionText = styled.h4`
  font-size: 1.2rem;
  color: var(--bodyText);
  font-weight: 500;
  text-align: left;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

const FrontendDevelopment = () => {
  const { selectedContent } = useSelectedContent();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 64px - 64px)",
      }}
    >
      <Container>
        <Box
          sx={{
            padding: "20px 20px 100px 20px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <Box
                display="flex"
                justifyContent="center"
                sx={{
                  border: "12px solid  #444",
                  boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.8)",
                  borderRadius: "999px",
                }}
              >
                <img
                  alt="complex"
                  src={`${selectedContent.image}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={7}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <CustomGrid>
                  <TitleText>{selectedContent.title}</TitleText>
                  <DescriptionText>
                    {selectedContent.description}
                  </DescriptionText>

                  <Button
                    component={Link}
                    to={`/experience/${selectedContent.id}`}
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      mr: 3,
                      background: "#d96c06",
                      "&:hover": { backgroundColor: "#bdbf09" },
                    }}
                  >
                    Experience
                  </Button>
                  <Button
                    component={Link}
                    to={`/portfolio/${selectedContent.id}`}
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      background: "#d96c06",
                      "&:hover": { backgroundColor: "#bdbf09" },
                    }}
                  >
                    Portfolio
                  </Button>
                </CustomGrid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FrontendDevelopment;
