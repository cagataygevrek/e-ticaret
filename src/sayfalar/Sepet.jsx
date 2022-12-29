import { Add, Remove } from "@mui/icons-material";

import styled from "styled-components";
import Duyurular from "../bilesenler/Duyurular";
import Footer from "../bilesenler/Footer";
import Navbar from "../bilesenler/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Baslik = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Bilgi = styled.div`
  flex: 3;
`;
const Ozet = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const Urunler = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UrunDetay = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 200px;
`;
const Detaylar = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const UrunAdi = styled.div`
  font-weight: 200;
`;
const UrunModeli = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const FiyatDetay = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const UrunSayisiAlani = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const UrunSayisi = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const OzetBaslik = styled.h1`
  font-weight: 200;
`;

const SiparisOzeti = styled.h1`
  font-weight: 200;
`;

const VerilenSiparisler = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SiparisYazisi = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Sepet = () => {
  return (
    <Container>
      <Navbar />
      <Duyurular />
      <Wrapper>
        <Baslik>Sepetiniz</Baslik>
        <Top>
          <TopButton>Alışverişe Devam Et</TopButton>
          <TopTexts>
            <TopText> Sepetteki Ürünler (2)</TopText>
            <TopText> Favori Listeniz (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>Alışverişi Onayla</TopButton>
        </Top>
        <Bottom>
          <Bilgi>
            <Urunler>
              <UrunDetay>
                <Image src='https://i.hizliresim.com/lum1v8t.jpg' />
                <Detaylar>
                  <UrunAdi>
                    {" "}
                    <b> Urun:</b>Oppo
                  </UrunAdi>
                  <UrunModeli>
                    {" "}
                    <b> Urun Modeli:</b>A16 64 GB
                  </UrunModeli>
                  <FiyatDetay>
                    {" "}
                    <b>Fiyat: 4300 ₺</b>
                  </FiyatDetay>
                  <UrunSayisiAlani></UrunSayisiAlani>
                  <UrunSayisiAlani>
                    <Add />
                    <UrunSayisi>1</UrunSayisi>
                    <Remove />
                  </UrunSayisiAlani>
                </Detaylar>
              </UrunDetay>
            </Urunler>
            <Hr />
            <Urunler>
              <UrunDetay>
                <Image src='https://i.hizliresim.com/7z3k59g.jpg' />
                <Detaylar>
                  <UrunAdi>
                    {" "}
                    <b> Urun:</b>Xiaomi
                  </UrunAdi>
                  <UrunModeli>
                    {" "}
                    <b> Urun Modeli:</b> Redmi Note 11
                  </UrunModeli>
                  <FiyatDetay>
                    {" "}
                    <b>Fiyat: 10000 ₺</b>
                  </FiyatDetay>
                  <UrunSayisiAlani></UrunSayisiAlani>
                  <UrunSayisiAlani>
                    <Add />
                    <UrunSayisi>1</UrunSayisi>
                    <Remove />
                  </UrunSayisiAlani>
                </Detaylar>
              </UrunDetay>
            </Urunler>
          </Bilgi>
          <Ozet>
            <OzetBaslik>
              <SiparisOzeti>Sipariş Özeti:</SiparisOzeti>
              <VerilenSiparisler type='toplam'>
                <SiparisYazisi>Toplam</SiparisYazisi>
                <SiparisYazisi>1000 ₺</SiparisYazisi>
              </VerilenSiparisler>
            </OzetBaslik>
            <Button>Sepeti Onayla</Button>
          </Ozet>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Sepet;
