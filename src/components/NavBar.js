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
    </ButtonGroup>
  );
};

export default NavBar;
