import styled from "@emotion/styled";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { sliderFotograflari } from "../veri";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;

  transform: translateX(${(props) => props.fotograf * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Baslik = styled.h1`
  font-size: 70px;
`;

const Bilgi = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Buton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [fotograf, fotografiGuncelle] = useState(0);
  const resmiDegistir = (direction) => {
    if (direction === "left") {
      fotografiGuncelle(fotograf > 0 ? fotograf - 1 : 2);
    } else {
      fotografiGuncelle(fotograf > 2 ? fotograf + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction='left' onClick={() => resmiDegistir("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper fotograf={fotograf}>
        {sliderFotograflari.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Baslik>{item.title}</Baslik>
              <Bilgi>{item.desc}</Bilgi>
              <Buton>Detaylar</Buton>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction='right' onClick={() => resmiDegistir("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
