import styled from "styled-components";
import CartItem from "../CartItem";
import { useGlobalContext } from "../../context";
import { mobile, tablet, tabletPro } from "../../responsive";

const Cart = () => {
  const { cart, total, clearCart, refresh } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <Container>
        <Top>
          <Title>shopping cart</Title>
        </Top>
        <Empty>is currently empty</Empty>
        <Refresh onClick={refresh}>refresh</Refresh>
      </Container>
    );
  }
  return (
    <Container>
      <Top>
        <Title>shopping cart</Title>
      </Top>
      <Center>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </Center>
      <Hr />
      <Bottom>
        <Total>
          <Name>Total</Name>
          <Price>${total}</Price>
        </Total>
        <ButtonWrapper>
          <ClearCart onClick={clearCart}>clear cart</ClearCart>
        </ButtonWrapper>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 70px);
  width: 60%;

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

const Top = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  ${mobile({
    margin: "0"
  })}
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  letter-spacing: 5px;

  ${mobile({
    fontSize: "26px",
    margin: "20px 0 20px 0"
  })}
`;

const Center = styled.div`
  width: 100%;
`;

const Hr = styled.hr`
  height: 3px;
  width: 100%;
  background: gray;
  margin-top: 20px;
  border: none;

  ${mobile({
    // marginTop: "0"
    // display: "none"
  })}
`;

const Bottom = styled.div`
  width: 100%;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 700;

  ${mobile({
    fontSize: "16px",
    padding: 0,
    margin: 0,
  })}
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;

  ${mobile({
    fontSize: "16px",
    padding: 0,
    margin: 0,
  })}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ClearCart = styled.button`
  text-transform: uppercase;
  padding: 10px 20px;
  border: 1px solid #000;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  background: transparent;

  &:hover {
    background: lightblue;
    opacity: 0.8;
  }

  ${mobile({
    fontSize: "16px",
    marginTop: "20px"
  })}
`;

const Empty = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  color: gray;

  ${mobile({
    fontSize: "16px",
  })}
`;

const Refresh = styled.button`
  text-transform: uppercase;
  background: transparent;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px 20px;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;
  font-size: 20px;
  transition: 0.3s;

  &:hover {
    background: lightblue;
    color: rgba(0, 0, 0, 0.7);
  }

  ${mobile({
    fontSize: "16px",
  })}
`;
export default Cart;
