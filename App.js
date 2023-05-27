import { useEffect, useState } from "react";
import {
  ButtonRefresh,
  ContainerApp,
  KanyeImage,
  Quote,
  QuoteContainer,
  TitleApp,
} from "./styles";
import axios from "axios";

export default function App() {

  const [quote, setQuote] = useState();

  useEffect(() => {
    axios
      .get("https://api.kanye.rest/")
      .then((kanyeQuote) => setQuote(kanyeQuote.data));
  }, []);

  return (
    <ContainerApp>
      <TitleApp> KANYE QUOTE OF THE DAY: </TitleApp>
      <QuoteContainer>
        <KanyeImage
          source={{
            uri: "https://wirdd.in/kanye/gifs/head.gif",
          }}
        />
        {quote && <Quote>"{quote.quote}"</Quote>}
        <ButtonRefresh
          color="#a75f3b"
          title="Refresh for a new Quote 🌊"
        ></ButtonRefresh>
      </QuoteContainer>
    </ContainerApp>
  );
}
