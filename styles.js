import styled from "styled-components/native";

export const ContainerApp = styled.View`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 1rem;
  background-color: #f58b57;
  align-items: center;
  justify-content: center;
`;

export const TitleApp = styled.Text`
font-size: 1.5rem;
font-weight: bolder;
`

export const QuoteContainer = styled.View`
width: 80%;
height: fit-content;
display: flex;
justify-content: center;
align-items: center;
gap: 0.8rem;
`
export const KanyeImage = styled.Image`
width:300px;
height: 300px;
`
export const Quote = styled.Text`
font-size: 1.3rem;
font-weight: bold;
text-align: center;
`

export const ButtonRefresh = styled.Button`
background-color: blueviolet;
`