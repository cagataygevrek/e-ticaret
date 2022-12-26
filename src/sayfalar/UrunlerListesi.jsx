import styled from "styled-components";
import Duyurular from "../bilesenler/Duyurular";
import Footer from "../bilesenler/Footer";
import Navbar from "../bilesenler/Navbar";
import Urunbildirimi from "../bilesenler/Urunbildirimi";
import Urunler from "../bilesenler/Urunler";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const UrunleriFiltrele = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filtre = styled.div`
  margin: 20px;
`;

const FiltreStil = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const UrunSec = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const UrunOption = styled.option``;
const UrunlerListesi = () => {
  return (
    <Container>
      <Navbar />
      <Duyurular />

      <Title>Ürünleri Listele</Title>
      <UrunleriFiltrele>
        <Filtre>
          <FiltreStil> Ürünleri Filtrele</FiltreStil>

          <UrunSec>
            <UrunOption>Telefon</UrunOption>
            <UrunOption>Bilgisayar</UrunOption>
            <UrunOption>Saat</UrunOption>
          </UrunSec>
        </Filtre>

        <Filtre>
          <FiltreStil> Ürünleri Sırala</FiltreStil>
          <UrunSec>
            <UrunOption selected> Yeni Ürünler</UrunOption>
            <UrunOption>Artan</UrunOption>
            <UrunOption>Azalan</UrunOption>
          </UrunSec>
        </Filtre>
      </UrunleriFiltrele>
      <Urunler />
      <Urunbildirimi />
      <Footer />
    </Container>
  );
};

export default UrunlerListesi;
