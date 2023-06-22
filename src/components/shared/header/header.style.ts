import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  display: flex;
  height: 2rem;
  align-items: center;
  justify-content: space-between;
`;

export const LogoBox = styled.div`
  display: flex;
  height: 1.5rem;
  gap: 0.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  width: 25%;
  justify-content: space-between;

  a,
  button {
    color: #404040;
    font-size: 14px;
    font-weight: 400;
    border-radius: 5px;
    padding: 8px 12px;
    background-color: #f9f7f7;
    border: none;
  }

  .active {
    color: white;
    background-color: #ff67b0;
  }
`;
