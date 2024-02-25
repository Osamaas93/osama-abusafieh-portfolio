import { Button, Stack } from "@mui/material";
import styled from "styled-components";

const CustomButton = styled(Button)`
  && {
    color: var(--brandPrimary);
    font-weight: 600;
  }
`;

const CustomImg = styled.img`
  width: 33px;
`;

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  aligh-items: center;
  justify-content: center;

  color: var(--bodyText);
  z-index: 0;
  width: 100%;
  padding: 5px 0;
  background: var(--bgDefault);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Stack direction="row" spacing={1} justifyContent="center" my={2}>
        <CustomButton
          component="a"
          href="https://www.linkedin.com/in/osamaabusafieh/"
        >
          <CustomImg
            src={`${process.env.PUBLIC_URL}/assets/linkedin.png`}
            alt="LinkedIn Logo"
          />
        </CustomButton>
        <CustomButton component="a" href="https://www.instagram.com/osamaas93/">
          <CustomImg
            src={`${process.env.PUBLIC_URL}/assets/instagram.png`}
            alt="Instagram Logo"
          />
        </CustomButton>

        <CustomButton
          component="a"
          href="https://www.youtube.com/@Osamaabusafieh?si=Xp8fo8obNZ1JWWse"
        >
          <CustomImg
            src={`${process.env.PUBLIC_URL}/assets/youtube.png`}
            alt="YouTube Logo"
          />
        </CustomButton>
      </Stack>
    </FooterContainer>
  );
};

export default Footer;
