import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomButton = styled(Button)`
  && {
    position: relative;
    color: var(--brandPrimary);
    font-weight: 750;
    margin-bottom: ${(props) => (props.$gutterBottom ? "8px" : "0")};
    opacity: 0.9;
    &:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.06);
    }
  }
`;

const ResumeButton = styled(Button)`
  && {
    color: var(--brandSecondary);
    font-weight: 850;
    border: 1px solid rgba(0, 229, 255, 0.35);
    background: rgba(0, 229, 255, 0.08);
    &:hover {
      background: rgba(0, 229, 255, 0.14);
    }
  }
`;

const NavBar = () => {
  return (
    <ButtonGroup variant="text" aria-label="button group">
      <CustomButton
        component={Link}
        to="/"
      >
        Home
      </CustomButton>
      <CustomButton
        component={Link}
        to="/portfolio"
      >
        Portfolio
      </CustomButton>
      <CustomButton component={Link} to="/contact-me">
        Contact Me
      </CustomButton>
      <ResumeButton
        component="a"
        href="https://drive.google.com/file/d/1_Zqm_A46HNvBCaIsFt2CXGMKRJrKhNro/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </ResumeButton>
    </ButtonGroup>
  );
};

export default NavBar;
