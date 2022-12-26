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
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Baslik = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const YaziAlani = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Sozlesme = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 20%;
  border: none;
  padding: 20px 0px;
  background-color: blue;
  color: white;
  cursor: pointer;
`;

const UyeOl = () => {
  return (
    <Container>
      <Wrapper>
        <Baslik>Üye Ol</Baslik>
        <Form>
          <YaziAlani placeholder='ad' />
          <YaziAlani placeholder='soyad' />
          <YaziAlani placeholder='kullanıcı adı' />
          <YaziAlani placeholder='e-posta' />
          <YaziAlani placeholder='şifre' />
          <YaziAlani placeholder='şifreyi tekrarla' />
          <Sozlesme>
            Üye olmadan önce lütfen üyelik sözleşmesini okuyunuz ve mail
            adresinizin kullanılır olmasına dikkat ediniz.
            <b>Üyelik Sözleşmesi</b>
          </Sozlesme>
          <Button>Üye oluştur</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default UyeOl;
