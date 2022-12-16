import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Sol = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Orta = styled.div`
  flex: 1;
  text-align: center;
`;
const Sag = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuIcon = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Language = styled.span`
  fonst-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Sol>
          <Language>TR</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "blue", fontSize: 15 }} />
          </SearchContainer>
        </Sol>
        <Orta>
          <Logo>E-Ticaret v1</Logo>
        </Orta>
        <Sag>
          <MenuIcon>Kayıt Ol</MenuIcon>
          <MenuIcon>Giriş Yap</MenuIcon>
          <MenuIcon>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuIcon>
        </Sag>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
