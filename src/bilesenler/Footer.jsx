import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Logo = styled.h1``;
const Aciklama = styled.p`
  margin: 20px 0px;
`;
const SosyalMedya = styled.div`
  display: flex;
`;
const SosyalMedyaGorsel = styled.div`
  width: 40px;
  heigth: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(ozellik) => ozellik.renk};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Container = styled.div`
  display: flex;
`;
const SolTaraf = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const OrtaTaraf = styled.div`
  flex: 1;
  padding: 20px;
`;
const SagTaraf = styled.div`
  flex: 1;
  padding: 20px;
`;

const Baslik = styled.h3`
  margin-bottom: 30px;
`;

const Liste = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const Listedekiler = styled.li`
  width: 50%;
`;

const IletisimBilgileri = styled.div`
  margin-bottom: 20px;
  display: flex;
  aling-items: center;
`;
const Footer = () => {
  return (
    <Container>
      <SolTaraf>
        <Logo>Çağatay Gevrek</Logo>
        <Aciklama>Bu projeye devam edilmektedir.</Aciklama>
        <SosyalMedya>
          <SosyalMedyaGorsel renk='355999'>
            <Facebook />
          </SosyalMedyaGorsel>
          <SosyalMedyaGorsel renk='355999'>
            <Instagram />
          </SosyalMedyaGorsel>
          <SosyalMedyaGorsel renk='355999'>
            <Twitter />
          </SosyalMedyaGorsel>
        </SosyalMedya>
      </SolTaraf>
      <OrtaTaraf>
        <Baslik>Bağlantılar</Baslik>
        <Liste>
          <Listedekiler>Ana sayfa</Listedekiler>
          <Listedekiler>Kullanıcı bilgileri</Listedekiler>
          <Listedekiler>Satın alınanlar</Listedekiler>
        </Liste>
      </OrtaTaraf>
      <SagTaraf>
        <Baslik>İletişim</Baslik>
        <IletisimBilgileri>
          <Room style={{ marginRight: "10px" }} />
          Türkiye
        </IletisimBilgileri>
        <IletisimBilgileri>
          <Phone style={{ marginRight: "10px" }} />
          0123456
        </IletisimBilgileri>
        <IletisimBilgileri>
          <Mail style={{ marginRight: "10px" }} />
          ornekmail@cagataygevrek.com
        </IletisimBilgileri>
      </SagTaraf>
    </Container>
  );
};

export default Footer;
