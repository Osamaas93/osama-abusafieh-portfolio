import { Button, Stack } from "@mui/material";
import styled from "styled-components";

const CustomButton = styled(Button)`
  && {
    color: var(--brandPrimary);
    font-weight: 600;
    opacity: 0.9;
    transition: transform 120ms ease, opacity 120ms ease;
    &:hover {
      opacity: 1;
      transform: translateY(-1px);
    }
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
  align-items: center;
  justify-content: center;

  color: var(--bodyText);
  z-index: 10;
  width: 100%;
  padding: 16px 0;
  background: rgba(11, 18, 32, 0.75);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.10);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Stack direction="row" spacing={1} justifyContent="center" my={2}>
        <CustomButton
          component="a"
          href="https://www.linkedin.com/in/osamaabusafieh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomImg
            src={`${process.env.PUBLIC_URL}/assets/linkedin.png`}
            alt="LinkedIn Logo"
          />
        </CustomButton>
        <CustomButton
          component="a"
          href="https://www.instagram.com/osamaas93/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomImg
            src={`${process.env.PUBLIC_URL}/assets/instagram.png`}
            alt="Instagram Logo"
          />
        </CustomButton>

        <CustomButton
          component="a"
          href="https://www.youtube.com/@Osamaabusafieh?si=Xp8fo8obNZ1JWWse"
          target="_blank"
          rel="noopener noreferrer"
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
