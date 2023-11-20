import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  max-width: 260px;
  max-height: 70px;
  margin: 0 auto;
  font-size: 0;
`;

const Img = styled.img`
  height: auto
  width: auto;
  max-width: 100%;
  max-height: 100%;
`;

function Logo() {
  return (
    <StyledLogo>
      {/* <Img src="/logo-light.png" alt="Logo" /> */}
      <Img src="/logo.svg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
