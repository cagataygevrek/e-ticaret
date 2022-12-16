import styled from "@emotion/styled";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";

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

  transform: translateX(-100vw);
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
  const [fotograf, fotografiuncelle] = useState(0);
  const resmiDegistir = (direction) => {};

  return (
    <Container>
      <Arrow direction='left' onClick={() => resmiDegistir("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg='fcf1ed'>
          <ImgContainer>
            <Image src='https://i.hizliresim.com/ozv2j1o.' />
          </ImgContainer>
          <InfoContainer>
            <Baslik>Lorem, ipsum dolor.</Baslik>
            <Bilgi>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Bilgi>
            <Buton>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quos repudiandae sed iure veritatis!
            </Buton>
          </InfoContainer>
        </Slide>

        <Slide bg='f5fafd'>
          <ImgContainer>
            <Image src='https://i.hizliresim.com/gnrehai.jpg' />
          </ImgContainer>
          <InfoContainer>
            <Baslik>Lorem, ipsum dolor.</Baslik>
            <Bilgi>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Bilgi>
            <Buton>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quos repudiandae sed iure veritatis!
            </Buton>
          </InfoContainer>
        </Slide>
      </Wrapper>

      <Arrow direction='right' onClick={() => resmiDegistir("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
