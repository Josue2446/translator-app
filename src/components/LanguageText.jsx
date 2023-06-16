import Menu from "./Menu";
import PropTypes from "prop-types";

const LanguageText = ({
  type,
  language,
  setShowLanguage,
  setTextToTranslate,
  textToTranslate, // BEFORE
  translatedtext, // AFTER
  setTranslatedText,
}) => {
  return (
    <div className={type}>
      <Menu language={language} setShowLanguage={setShowLanguage} type={type} />
      <textarea
        placeholder={type == "input" ? "Enter text" : "Translation"}
        // only allows user to type in ENTER TEXT
        // area, not the transaltion area
        disabled={type == "output"}
        onChange={(event) => setTextToTranslate(event.target.value)}
        value={type == "input" ? textToTranslate : translatedtext}
      />
    </div>
  );
};

LanguageText.propTypes = {
  type: PropTypes.any,
  language: PropTypes.any,
  setShowLanguage: PropTypes.any,
  setTextToTranslate: PropTypes.any,
  textToTranslate: PropTypes.any,
  translatedtext: PropTypes.any,
  setTranslatedText: PropTypes.any,
};

export default LanguageText;
