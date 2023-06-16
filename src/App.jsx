import { useState } from "react";
import axios from "axios";
import Button from "./components/Button";
import ShowLanguage from "./components/ShowLanguage";
import Switch from "./components/Switch";
import LanguageText from "./components/LanguageText";
import allLanguages from "./assets/allLanguages";

const App = () => {
  const [inputLanguage, setInputlanguage] = useState("Pick a language");
  const [outputLanguage, setOutLanguage] = useState("Pick a language");
  const [showLanguage, setShowLanguage] = useState(null);
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translate = async () => {
    const options = {
      method: "GET",
      url: "urlHere",
      params: {
        text: textToTranslate,
        tl: outputLanguage,
        sl: inputLanguage,
      },
      headers: {
        "X-RapidAPI-Key": "apiKey",
        "X-RapidAPI-Host": "hostHere",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setTranslatedText(response.data.translation);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      {/* INPUT TEXT FROM USER */}
      {!showLanguage && (
        <>
          <LanguageText
            type="input"
            language={inputLanguage}
            setShowLanguage={setShowLanguage}
            setTextToTranslate={setTextToTranslate}
            textToTranslate={textToTranslate}
            setTranslatedText={setTranslatedText}
          />
          <div
            className="change-language"
            onClick={() => {
              setInputlanguage(outputLanguage);
              setOutLanguage(inputLanguage);
            }}
          >
            <Switch />
          </div>
          {/* OUTPUT TEXT TO NEW LANGUGAGE */}
          <LanguageText
            type="output"
            language={outputLanguage}
            setShowLanguage={setShowLanguage}
            translatedText={translatedText}
          />
          <div className="button" onClick={translate}>
            <Button />
          </div>
        </>
      )}

      {showLanguage && (
        <ShowLanguage
          setShowLanguage={setShowLanguage}
          allLanguages={allLanguages}
          pickedLanguage={
            showLanguage == "input" ? inputLanguage : outputLanguage
          }
          setPickedLanguage={
            showLanguage == "input" ? setInputlanguage : setOutLanguage
          }
        />
      )}
    </div>
  );
};

export default App;
