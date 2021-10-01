import styled from "styled-components";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useGlobalContext } from "../../context";
import { mobile } from "../../responsive";

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease, toggleAmount } = useGlobalContext();

  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={img} alt={title} />
        </Left>
        <Center>
          <Name>{title}</Name>
          <Price>${price}</Price>
          <RemoveButton onClick={() => remove(id)}>remove</RemoveButton>
        </Center>
        <Right>
          <IncrementButton onClick={() => toggleAmount(id, "inc")}>
            <AiOutlineUp />
          </IncrementButton>
          <Amount>{amount}</Amount>
          <DecrementButton onClick={() => toggleAmount(id, "dec")}>
            <AiOutlineDown />
          </DecrementButton>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 120px auto 50px;
  align-items: center;
  height: 120px;
  margin: 0 20px 30px 20px;

  ${mobile({
    gridTemplateColumns: "80px auto 50px",
    height: "80px",
    margin: "0 10px 20px 10px"
  })}
`;

const Left = styled.div`
  width: 120px;
  height: 120px;

  ${mobile({
    width: "80px",
    height: "80px"
  })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Center = styled.div`
  height: 80%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Name = styled.p`
  margin: 0;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);

  ${mobile({
    fontSize: "14px"
  })}
`;

const Price = styled.p`
  margin: 0;
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: 600;
  color: gray;

  ${mobile({
    fontSize: "14px",
  })}
`;

const RemoveButton = styled.button`
  width: 80px;
  border: none;
  color: #0b85d1;
  background: transparent;
  text-align: left;
  margin: 0;
  padding: 0;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: lightblue;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80%;
`;

const IncrementButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 20px;
  color: blue;
  transition: 0.3s;

  &:hover {
    color: #4ab9ff;
  }

  ${mobile({
    fontSize: "16px"
  })}
`;

const Amount = styled.p`
  padding: 0;
  margin: 0;
  font-size: 22px;

  ${mobile({
    fontSize: "16px",
  })}
`;

const DecrementButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 20px;
  color: blue;
  transition: 0.3s;

  &:hover {
    color: #4ab9ff;
  }

  ${mobile({
    fontSize: "16px",
  })}
`;

export default CartItem;
