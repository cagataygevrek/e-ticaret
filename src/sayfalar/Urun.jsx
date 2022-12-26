import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Duyurular from "../bilesenler/Duyurular";
import Footer from "../bilesenler/Footer";
import Navbar from "../bilesenler/Navbar";
import Urunbildirimi from "../bilesenler/Urunbildirimi";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const FotoAlani = styled.div`
  flex: 1;
`;
const Fotograf = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const BilgiAlani = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Baslik = styled.h1`
  font-weight: 200;
`;
const Aciklama = styled.p`
  margin: 20px 0px;
`;
const Fiyat = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FiltreAlani = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filtre = styled.div`
  display: flex;
  align-items: center;
`;
const FiltreBaslik = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FiltreIcerik = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.option`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Miktar = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: red;
  }
`;

const DigerUrunler = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const DigerUrunleriFiltrele = styled.option``;

const Urun = () => {
  return (
    <Container>
      <Navbar />
      <Duyurular />
      <Wrapper>
        <FotoAlani>
          <Fotograf src='https://i.hizliresim.com/m06093k.jpg' />
        </FotoAlani>

        <BilgiAlani>
          <Baslik>Huawei Matebook D15</Baslik>
          <Aciklama>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem aut voluptas non maxime sunt mollitia in expedita
            ipsam iusto! Minus!
          </Aciklama>
          <Fiyat>15000₺</Fiyat>
          <FiltreAlani>
            <Filtre>
              <FiltreBaslik>Bilgisayarlar</FiltreBaslik>
              <FiltreIcerik></FiltreIcerik>
              <FiltreIcerik></FiltreIcerik>
            </Filtre>

            <Filtre>
              <FiltreBaslik>Diğer Urünler</FiltreBaslik>
              <DigerUrunler>
                <DigerUrunleriFiltrele>Telefon</DigerUrunleriFiltrele>
                <DigerUrunleriFiltrele>Yazıcı</DigerUrunleriFiltrele>
                <DigerUrunleriFiltrele>Modem</DigerUrunleriFiltrele>
                <DigerUrunleriFiltrele>Klavye</DigerUrunleriFiltrele>
              </DigerUrunler>
            </Filtre>
          </FiltreAlani>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Miktar>1</Miktar>
              <Add />
            </AmountContainer>
            <Button>Sepete Ekle</Button>
          </AddContainer>
        </BilgiAlani>
      </Wrapper>
      <Urunbildirimi />
      <Footer />
    </Container>
  );
};

export default Urun;
