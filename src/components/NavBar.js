import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomButton = styled(Button)`
  && {
    position: relative;
    color: var(--brandPrimary);
    font-weight: 600;
    margin-bottom: ${(props) => (props.$gutterBottom ? "8px" : "0")};
  }
`;

const ResumeButton = styled(Button)`
  && {
    color: var(--brandSecondary);
    font-weight: 600;
  }
`;

const NavBar = () => {
  return (
    <ButtonGroup variant="text" aria-label="button group">
      <CustomButton component={Link} to="/frontend-development">
        Frontend Development
      </CustomButton>
      <CustomButton component={Link} to="/music-production">
        Music Production
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
