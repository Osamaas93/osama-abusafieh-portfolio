import { Button, ButtonGroup, Stack } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavBar from "../components/NavBar";
import DropDownMenu from "../components/DropDownMenu";

const CustomBox = styled(Box)`
  && {
    position: absolute;
    top: 65px;
    background: var(--bgDefault);
    border-radius: 8px;
    z-index: 1;
  }
`;

const CustomButton = styled(Button)`
  && {
    position: relative;
    color: var(--brandPrimary);
    font-weight: 600;
    margin-bottom: ${(props) => (props.$gutterBottom ? "8px" : "0")};
  }
`;

const CustomImg = styled.img`
  width: 33px;
`;

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 780);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Stack direction="row" spacing={2} justifyContent="center" my={3}>
      <CustomImg src={`${process.env.PUBLIC_URL}/assets/html.png`} alt="awd" />

      {isSmallScreen ? (
        <>
          <CustomButton onClick={() => setOpen(!open)}>
            <MenuIcon />
          </CustomButton>
          {open && (
            <CustomBox onClick={() => setOpen(!open)}>
              <DropDownMenu />
            </CustomBox>
          )}
        </>
      ) : (
        <NavBar />
      )}
    </Stack>
  );
};

export default Header;
