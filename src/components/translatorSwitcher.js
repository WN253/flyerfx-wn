import React, { useState } from 'react';
import GoogleTranslateComponent from './googleapitranslate';
import MicrosoftTranslateComponent from './microsofttranslate';

const TranslatorSwitcher = () => {
  const [useGoogle, setUseGoogle] = useState(true);

  const toggleTranslator = () => {
    setUseGoogle(!useGoogle);
  };

  return (
    <div>
      <button onClick={toggleTranslator}>
        Switch to {useGoogle ? 'Microsoft' : 'Google'} Translator
      </button>
      <h2>{useGoogle ? 'Google Translate' : 'Microsoft Translate'}</h2>
      {useGoogle ? <GoogleTranslateComponent /> : <MicrosoftTranslateComponent />}
    </div>
  );
};

export default TranslatorSwitcher;