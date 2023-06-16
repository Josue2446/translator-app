import { useState } from "react";
import PropTypes from "prop-types";

const ShowLanguage = ({
  setShowLanguage,
  allLanguages,
  pickedLanguage,
  setPickedLanguage,
}) => {
  const [searchedLanguage, setSearchedLanguage] = useState("");

  let svgPath =
    "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z";

  const searchForLanguages = allLanguages.filter((item) => item.toLowerCase());

  return (
    <div className="language-options">
      <div className="search-language">
        <input
          value={searchedLanguage}
          onChange={(event) => setSearchedLanguage(event.target.value)}
        />
        <div
          className="close-show-language"
          onClick={() => setShowLanguage(null)}
        >
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d={svgPath}></path>
          </svg>
        </div>
      </div>
      <div className="option-drop-down-langugages">
        <ul>
          {searchForLanguages?.map((lang, key) => (
            <div className="language-list" key={key}>
              <div className="icons">{pickedLanguage === lang ? "✓" : ""}</div>
              <li
                onClick={(event) => {
                  setShowLanguage(null);
                  setPickedLanguage(event.target.textContent);
                }}
                style={{ color: pickedLanguage === lang ? "green" : null }}
              >
                {lang}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

ShowLanguage.propTypes = {
  setShowLanguage: PropTypes.any,
  allLanguages: PropTypes.any,
  pickedLanguage: PropTypes.any,
  setPickedLanguage: PropTypes.any,
};

export default ShowLanguage;
