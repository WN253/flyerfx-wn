import React, { useState } from "react";
import axios from "axios";

const GoogleTranslateComponent = () => {
  const [inputText, setInputText] = useState("");
  const [translatedMalayalam, setTranslatedMalayalam] = useState("");
  const [translatedArabic, setTranslatedArabic] = useState("");

  const API_URL = `https://script.google.com/macros/s/AKfycbxBeHCWWfsBB9cphwjGJ72kCio140sUvdBmRe8VSsCHGOaqembE-RJ3h25o8lITsvjbWA/exec`;

  const handleTranslate = async () => {
    try {

      const malayalamResponse = await axios.post(API_URL, {
        q: inputText,
        target: "ml",
      });
      setTranslatedMalayalam(malayalamResponse.data.data.translations[0].translatedText);

      
      const arabicResponse = await axios.post(API_URL, {
        q: inputText,
        target: "ar", 
      });
      setTranslatedArabic(arabicResponse.data.data.translations[0].translatedText);
      
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
        placeholder="Enter text to translate"
      />
      <button onClick={handleTranslate}>Translate</button>

      <h3>Translated to Malayalam:</h3>
      <p>{translatedMalayalam}</p>

      <h3>Translated to Arabic:</h3>
      <p>{translatedArabic}</p>
    </div>
  );
};

export default GoogleTranslateComponent;
