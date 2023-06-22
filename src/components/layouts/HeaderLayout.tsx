import styled from "@emotion/styled";
import React, { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

export const HeaderLayout = ({ children }: PropsType) => {
  return (
    <AppLayoutStyle>
      <Content>{children}</Content>
    </AppLayoutStyle>
  );
};

const AppLayoutStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  width: 80%;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
`;
