import styled from 'styled-components'
import { themeColors } from 'theme/colors'

export const MainContianer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 60px;
  background-color: ${themeColors.LIGHT_ORANGE};
  width: 100%;
`
export const Heading = styled.div`
  font-size: 20px;
  letter-spacing: 0.8px;
  color: ${themeColors.LIGHT_PURPLE};
`
export const NavItems = styled.ul`
  display: flex;
  gap: 30px;
  text-decoration: none;
  list-style: none;
`
export const NavItem = styled.li`
  color: ${themeColors.LIGHT_PURPLE};
  cursor: pointer;
  :hover {
    color: ${themeColors.DARK_PURPLE};
  }
`

export const LogoutButton = styled.div``
