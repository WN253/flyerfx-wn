import React, { useState } from "react";
import { translate } from "google-translate-api-browser";

const TranslateComponent = () => {
  const [inputText, setInputText] = useState("");
  const [translatedMalayalam, setTranslatedMalayalam] = useState("");
  const [translatedArabic, setTranslatedArabic] = useState("");

  const handleTranslate = async () => {
    try {

      const malayalamResult = await translate(inputText, {
        from: "en",
        to: "ml", 
        corsUrl: "http://cors-anywhere.herokuapp.com/",
      });
      setTranslatedMalayalam(malayalamResult.text);

      const arabicResult = await translate(inputText, {
        from: "en",
        to: "ar",
        corsUrl: "http://cors-anywhere.herokuapp.com/",
      });
      setTranslatedArabic(arabicResult.text);
      
    } catch (error) {
      console.error("Translation Error:", error);
    }
  };

  return (
    <div>
      <h2>English to Malayalam & Arabic Translator</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleTranslate}>Translate</button>

      <h3>Translated to Malayalam:</h3>
      <p>{translatedMalayalam}</p>

      <h3>Translated to Arabic:</h3>
      <p>{translatedArabic}</p>
    </div>
  );
};

export default TranslateComponent;
