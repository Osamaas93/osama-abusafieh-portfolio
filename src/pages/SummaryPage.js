import React from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import styled from "styled-components";
import useSelectedContent from "./context/context";

const CustomGrid = styled.div`
  @media (max-width: 700px) {
    text-align: center;
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
        minHeight: "calc(100vh - 64px - 64px)", // Adjust according to your header and footer height
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
                  <h2
                    style={{
                      fontSize: "2rem",
                      color: "var(--brandSecondary)",
                      fontWeight: 700,
                    }}
                  >
                    {selectedContent.title}
                  </h2>
                  <h4
                    style={{
                      fontSize: "1.2rem",
                      color: "var(--bodyText)",
                      fontWeight: 500,
                    }}
                  >
                    {selectedContent.description}
                  </h4>

                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      mr: 3,
                      background: "#d96c06",
                      "&:focus": { backgroundColor: "#bdbf09" },
                    }}
                    id={selectedContent.id}
                  >
                    Experience
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      background: "#d96c06",
                      "&:focus": { backgroundColor: "#bdbf09" },
                    }}
                    id={selectedContent.id}
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
