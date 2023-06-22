import React from "react";
import * as S from "./header.style";
import { NavLink } from "react-router-dom";
import { HeaderLayout } from "@/components/layouts/HeaderLayout";

export const Header = () => {
  return (
    <HeaderLayout>
      <S.LogoBox>
        <img src="/assets/logo/no-text.svg" />
        <img src="/assets/logo/text.svg" />
      </S.LogoBox>
      <S.Nav>
        <NavLink to="/">일정관리</NavLink>
        <NavLink to="/friends">친구 추가</NavLink>
        <button>로그아웃</button>
      </S.Nav>
    </HeaderLayout>
  );
};
