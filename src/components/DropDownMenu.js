import { Link } from "react-router-dom";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";

const CustomMenuItem = styled(MenuItem)`
  && {
    color: var(--brandPrimary);
    font-weight: 600;
  }
`;

const ResumeButton = styled(MenuItem)`
  && {
    color: var(--brandSecondary);
    font-weight: 600;
  }
`;

const DropDownMenu = () => {
  return (
    <MenuList dense>
      <CustomMenuItem component={Link} to="/frontend-development">
        <ListItemText>Frontend Development</ListItemText>
      </CustomMenuItem>
      <CustomMenuItem component={Link} to="/music-production">
        <ListItemText>Music Production</ListItemText>
      </CustomMenuItem>
      <CustomMenuItem component={Link} to="/contact-me">
        <ListItemText>Contact Me</ListItemText>
      </CustomMenuItem>
      <ResumeButton
        component="a"
        href="https://drive.google.com/file/d/1_Zqm_A46HNvBCaIsFt2CXGMKRJrKhNro/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </ResumeButton>
    </MenuList>
  );
};

export default DropDownMenu;
