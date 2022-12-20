import styled from "styled-components";
import { kategoriler } from "../veri";
import KategoriItem from "./KategoriItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Kategoriler = () => {
  return (
    <Container>
      {kategoriler.map((item) => (
        <KategoriItem item={item} />
      ))}
    </Container>
  );
};

export default Kategoriler;
