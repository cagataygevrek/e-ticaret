import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.hizliresim.com/m41o6h8.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: white;
`;

const Baslik = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const YaziAlani = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 20%;
  heigth: 50%;
  border: none;
  padding: 20px 0px;
  background-color: blue;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

const GirisYap = () => {
  return (
    <Container>
      <Wrapper>
        <Baslik>Giriş Yap</Baslik>
        <Form>
          <YaziAlani placeholder='kullanıcı adı' />

          <YaziAlani placeholder='şifre' />

          <Button>Giriş</Button>
          <Link> Şifrenizi mi unuttunuz?</Link>
          <Link>Yeni üye oluştur</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default GirisYap;
