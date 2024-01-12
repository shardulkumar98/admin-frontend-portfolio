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
  background-color: ${themeColors.CREAMY_WHITE};
  height: 90vh;
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
  width: 100%;
  padding: 20px;
  gap: 25px;
`
export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 8px;
  border: 1px solid ${themeColors.LIGHT_PURPLE};
  width: 100%;
  padding: 20px;
  border-radius: 8px;

  .ant-select {
    width: 200px;
  }
`
export const AddMoreWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`

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
