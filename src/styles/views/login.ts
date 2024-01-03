import styled from "styled-components";
import { themeColors } from "theme/colors";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #ffe7c1;
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 40vw;
  gap: 15px;
  border: 2px solid ${themeColors.LIGHT_ORANGE};
  padding: 30px 20px;
  border-radius: 8px;
`;

export const Heading = styled.div`
  font-size: 24px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;
