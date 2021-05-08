import styled, { css } from 'styled-components';

export const Title = styled.h1`
  color: #ffffff;
`
export const Text = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    color: #ffffff;
    position: relative;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      color: #ffffff;
      left: 25%;
      width: 50%;
    }
    &:hover{
      color: #ffffff;
    }
  `}
`;

export const Navbar = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: .2rem 1rem;
    background: #464545
`
export const NavBody = styled.div`
  flex: auto;
  display: flex;
  padding-top: 10px;
  margin-left: 10px;
  `
