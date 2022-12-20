import { Send } from "@mui/icons-material";

import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Baslik = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Aciklama = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const YaziAlani = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: blue;
  color: white;
`;

const Urunbildirimi = () => {
  return (
    <Container>
      <Baslik>Ürün Bildirimi</Baslik>
      <Aciklama>
        Yeni ürünlerin mail adresinie gelmesi için kayıt olun.
      </Aciklama>
      <YaziAlani>
        <Input placeholder='example@mail.com' />
        <Button>
          <Send />
        </Button>
      </YaziAlani>
    </Container>
  );
};

export default Urunbildirimi;
