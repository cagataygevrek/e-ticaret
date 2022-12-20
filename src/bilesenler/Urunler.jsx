import styled from "styled-components";
import Urun from "./Urun";
import { populerUrunler } from "../veri";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Urunler = () => {
  return (
    <Container>
      {populerUrunler.map((item) => (
        <Urun item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Urunler;
