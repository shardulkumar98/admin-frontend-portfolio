import styled from 'styled-components'
import { themeColors } from 'theme/colors'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  gap: 10px;
`
export const Heading = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  background-color: ${themeColors.LIGHT_ORANGE};
  color: ${themeColors.CREAMY_WHITE};
  font-size: 20px;
  letter-spacing: 0.8px;
`
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  border: 2px solid ${themeColors.LIGHT_ORANGE};
  width: 100%;
  max-width: 45vw;
  padding: 20px;
  border-radius: 8px;
  gap: 25px;
  /* height: 30vh; */
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const Title = styled.div``
