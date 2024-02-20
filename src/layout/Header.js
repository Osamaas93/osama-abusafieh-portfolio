import { Button, ButtonGroup, Stack } from "@mui/material";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const CustomButton = styled(Button)`
  && {
    position: relative;
    color: var(--brandPrimary);
    font-weight: 600;
    /* Define styles for gutterBottom transient prop */
    margin-bottom: ${(props) => (props.$gutterBottom ? "8px" : "0")};
  }
`;

const CustomBox = styled(Box)`
  && {
    position: absolute;
    top: 65px;
    background: var(--bgDefault);
    border-radius: 8px;
  }
`;

const ResumeButton = styled(MenuItem)`
  && {
    color: var(--brandSecondary);
    font-weight: 600;
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
            <CustomBox>
              <MenuList dense>
                <MenuItem>
                  <ListItemText>Frontend Development</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText>Music Production</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText>Contact Me</ListItemText>
                </MenuItem>
                <ResumeButton
                  component="a"
                  href="https://drive.google.com/file/d/1_Zqm_A46HNvBCaIsFt2CXGMKRJrKhNro/view?usp=sharing"
                >
                  Download Resume
                </ResumeButton>
              </MenuList>
            </CustomBox>
          )}
        </>
      ) : (
        <ButtonGroup variant="text" aria-label="button group">
          <CustomButton>Frontend Development</CustomButton>
          <CustomButton>Music Production</CustomButton>
          <CustomButton>Contact Me</CustomButton>
          <ResumeButton
            component="a"
            href="https://drive.google.com/file/d/1_Zqm_A46HNvBCaIsFt2CXGMKRJrKhNro/view?usp=sharing"
          >
            Download Resume
          </ResumeButton>
        </ButtonGroup>
      )}
    </Stack>
  );
};

export default Header;
