import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background: purple;
  width: 100%;
`;
const Title = styled.h1`
  color: yellow;
  text-align: center;
  width: 100%;
`;
function Header() {
  return (
    <Wrapper>
      <Title>HA.MI 돈카츠</Title>
    </Wrapper>
  );
}
export default Header;
