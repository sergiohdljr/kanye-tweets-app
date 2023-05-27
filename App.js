import { useEffect, useState } from "react";
import {
  ContainerApp,
  KanyeImage,
  Quote,
  QuoteContainer,
  TitleApp,
} from "./styles";
import { Button } from "react-native";
import axios from "axios";

export default function App() {
  const [quote, setQuote] = useState();

  const getNewQuote = () => {
    axios
      .get("https://api.kanye.rest/")
      .then((kanyeQuote) => setQuote(kanyeQuote.data));
  };

  useEffect(() => {
    getNewQuote()
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
        {quote && <Quote>"{quote.quote}"</Quote>}
        <Button
          onPress={getNewQuote}
          color="#a75f3b"
          title="Refresh for a new Quote 🌊"
        ></Button>
      </QuoteContainer>
    </ContainerApp>
  );
}
