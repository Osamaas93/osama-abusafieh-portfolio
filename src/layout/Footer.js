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
  width: 100%;
  padding: 10px 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Stack direction="row" spacing={2} justifyContent="center" my={3}>
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
        <CustomButton component="a" href="https://www.facebook.com/osamaas93">
          <CustomImg
            src={`${process.env.PUBLIC_URL}/assets/facebook.png`}
            alt="Facebook Logo"
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
