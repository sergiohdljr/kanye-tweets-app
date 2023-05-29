import { useEffect, useState } from "react";
import {
  ContainerApp,
  KanyeImage,
  Quote,
  QuoteContainer,
  TitleApp,
} from "./src/styles/styles";
import { Button } from "react-native";
import axios from "axios";
import { api } from "./src/service/axios.config";

export default function App() {
  const getNewQuote = () =>
    api.get("/text").then((kanyeQuote) => setQuote(kanyeQuote.data));

  const [quote, setQuote] = useState();
  
  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <ContainerApp>
      <TitleApp>KANYE QUOTE OF THE DAY:</TitleApp>
      <QuoteContainer>
        <KanyeImage
          source={{
            uri: "https://wirdd.in/kanye/gifs/head.gif",
          }}
        />
        {quote && <Quote>"{quote}"</Quote>}
        <Button
          onPress={getNewQuote}
          color="#a75f3b"
          title="Press here for a new Quote 🌊"
        ></Button>
      </QuoteContainer>
    </ContainerApp>
  );
}
