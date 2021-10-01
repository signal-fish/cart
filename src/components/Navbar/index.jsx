import styled from "styled-components";
import {TiShoppingCart} from 'react-icons/ti'
import {useGlobalContext} from '../../context'
import {mobile, tablet, tabletPro} from '../../responsive'

const Navbar = () => {
  const {amount} = useGlobalContext()

  return (
    <Container>
      <Wrapper>
        <Title>UseReducer</Title>
        <IconContainer>
          <CartWrapper>
            <TiShoppingCart />
          </CartWrapper>
          <AmountWrapper>
            <Amount>{amount}</Amount>
          </AmountWrapper>
        </IconContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 70px;
  background: lightblue;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  ${mobile({
    height: "50px"
  })}
`;

const Wrapper = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${tabletPro({
    width: "80%",
  })}

  ${tablet({
    width: "90%",
  })}

  ${tablet({
    width: "95%",
  })}
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  letter-spacing: 2px;

  ${mobile({
    fontSize:"28px"
  })}
`;

const IconContainer = styled.div`
display: flex;
height: 100%;
align-items: center;
`;

const CartWrapper = styled.div`
font-size: 40px;
display: flex;
align-items: center;

${mobile({
  fontSize: "35px"
})}
`;

const AmountWrapper = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #3ca9ec;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 15px;

  ${mobile({
    width: "18px",
    height:"18px",
    top: "8px"
  })}
`;

const Amount = styled.span`

`;
export default Navbar;
