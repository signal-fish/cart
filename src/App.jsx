import styled from "styled-components";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Cart />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
