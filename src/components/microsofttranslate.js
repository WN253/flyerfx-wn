import React, { useState } from "react";
import axios from "axios";

const MicrosoftTranslateComponent = () => {
  const [inputText, setInputText] = useState("");
  const [translatedMalayalam, setTranslatedMalayalam] = useState("");
  const [translatedArabic, setTranslatedArabic] = useState("");

  const subscriptionKey = 'YOUR_SUBSCRIPTION_KEY';
  const endpoint = 'https://api.cognitive.microsofttranslator.com';
  const location = 'YOUR_RESOURCE_LOCATION';

  const translateText = async (text, toLanguage) => {
    try {
      const response = await axios({
        baseURL: endpoint,
        url: '/translate',
        method: 'post',
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey,
          'Ocp-Apim-Subscription-Region': location,
          'Content-type': 'application/json',
        },
        params: {
          'api-version': '3.0',
          'to': toLanguage,
        },
        data: [{
          'text': text,
        }],
        responseType: 'json',
      });

      return response.data[0].translations[0].text;
    } catch (error) {
      console.error('Error translating text:', error);
      throw error;
    }
  };

  const handleTranslate = async () => {
    try {
      const malayalamTranslation = await translateText(inputText, 'ml');
      setTranslatedMalayalam(malayalamTranslation);

      const arabicTranslation = await translateText(inputText, 'ar');
      setTranslatedArabic(arabicTranslation);
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

export default MicrosoftTranslateComponent;