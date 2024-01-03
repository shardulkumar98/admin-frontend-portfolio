import styled from 'styled-components'
import { themeColors } from 'theme/colors'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #ffe7c1;
  background: ${themeColors.LIGHT_ORANGE};
`

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 40vw;
  gap: 15px;
  border: 1.5px solid ${themeColors.LIGHT_PURPLE};
  padding: 30px 20px;
  border-radius: 8px;
`

export const Heading = styled.div`
  font-size: 24px;
  color: ${themeColors.PURPLE};
`

export const InputWrapper = styled.div`
  width: 100%;

  .ant-input {
    border: none;
    border-bottom: 1px solid ${themeColors.LIGHT_PURPLE};
    /* background: none; */
  }
`
