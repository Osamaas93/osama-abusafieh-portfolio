import { Button, ButtonGroup, Stack } from "@mui/material";
import styled from "styled-components";

const CustomButton = styled(Button)`
  && {
    color: var(--brandPrimary);
    font-weight: 600;
  }
`;

const ResumeButton = styled(Button)`
  && {
    color: var(--brandSecondary);
    font-weight: 600;
  }
`;
const CustomImg = styled.img`
  width: 33px;
`;
const Header = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" my={3}>
      <CustomImg src={`${process.env.PUBLIC_URL}/assets/html.png`} alt="awd" />

      <ButtonGroup variant="text" aria-label="button group">
        <CustomButton>Frontend Development</CustomButton>
        <CustomButton>Music Production</CustomButton>
        <CustomButton>Contact Me</CustomButton>
      </ButtonGroup>
      <ResumeButton
        component="a"
        href="https://drive.google.com/file/d/1_Zqm_A46HNvBCaIsFt2CXGMKRJrKhNro/view?usp=sharing"
      >
        Download Resume
      </ResumeButton>
    </Stack>
  );
};
export default Header;
