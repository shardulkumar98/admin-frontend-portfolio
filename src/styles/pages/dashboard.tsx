import styled from 'styled-components'
import { themeColors } from 'theme/colors'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  gap: 10px;
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
  border: 2px solid ${themeColors.LIGHT_ORANGE};
  width: 100%;
  max-width: 45vw;
  padding: 20px;
  border-radius: 8px;
  gap: 25px;
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const Title = styled.div``

export const FileTitle = styled.span`
  font-size: 12px;
  color: ${themeColors.LIGHT_PURPLE};
`
