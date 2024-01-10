import styled from 'styled-components'
import { themeColors } from 'theme/colors'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  gap: 10px;
  padding: 20px;
`
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  height: 100vh;
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${themeColors.LIGHT_PURPLE};
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  gap: 25px;
`
export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 8px;

  .ant-select {
    width: 200px;
  }
`
export const Title = styled.div``

export const FileTitle = styled.li`
  font-size: 12px;
  color: ${themeColors.LIGHT_PURPLE};
`

export const ImagesWrapper = styled.div`
  border: 1px solid #dddcdc;
  width: 50%;
  border-radius: 8px;
  padding: 5px;
  > div {
    font-size: 12px;
    color: #d3d1d1;
  }
  > ul {
    list-style-type: none;
  }
`
