import { Link } from "react-router-dom";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
import useSelectedContent from "../pages/context/context";
import { myInformation } from "../utls/myInfotmation";
import { Divider } from "@mui/material";

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
  const { updateSelectedContent } = useSelectedContent();
  return (
    <MenuList dense>
      <CustomMenuItem
        component={Link}
        to="/"
        onClick={() =>
          updateSelectedContent(
            myInformation.frontend.title,
            myInformation.frontend.description,
            myInformation.frontend.image,
            myInformation.frontend.id
          )
        }
      >
        <ListItemText>Frontend Development</ListItemText>
      </CustomMenuItem>
      <Divider sx={{ bgcolor: "gray" }} />
      <CustomMenuItem
        component={Link}
        to="/"
        onClick={() =>
          updateSelectedContent(
            myInformation.music.title,
            myInformation.music.description,
            myInformation.music.image,
            myInformation.music.id
          )
        }
      >
        <ListItemText>Music Production</ListItemText>
      </CustomMenuItem>
      <Divider sx={{ bgcolor: "gray" }} />
      <CustomMenuItem component={Link} to="/contact-me">
        <ListItemText>Contact Me</ListItemText>
      </CustomMenuItem>
      <Divider sx={{ bgcolor: "gray" }} />
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
