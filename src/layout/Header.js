import { Button, IconButton, Stack } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavBar from "../components/NavBar";
import DropDownMenu from "../components/DropDownMenu";
import { Link } from "react-router-dom";

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
    margin: 0;
  }
`;

const CustomIconButton = styled(IconButton)`
  && {
    position: relative;
    color: var(--brandPrimary);
    font-weight: 600;
    margin-bottom: ${(props) => (props.$gutterBottom ? "8px" : "0")};
    padding: 0;
  }
`;

const CustomImgLink = styled(Link)`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  margin-right: 16px;
`;
const CustomImg = styled.img`
  width: 33px;
`;

const HeaderContainer = styled.div`
  color: var(--bodyText);
  z-index: 0;
  width: 100%;
  margin: 0;
  padding: 8px;
  background: var(--bgDefault);
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
    <HeaderContainer>
      <Stack direction="row" justifyContent="center">
        <CustomImgLink to="/">
          <CustomImg
            src={`${process.env.PUBLIC_URL}/assets/html.png`}
            alt="awd"
          />
        </CustomImgLink>

        {isSmallScreen ? (
          <>
            <CustomIconButton disableRipple onClick={() => setOpen(!open)}>
              <MenuIcon />
            </CustomIconButton>

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
    </HeaderContainer>
  );
};

export default Header;
