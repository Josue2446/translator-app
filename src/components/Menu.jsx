import PropTypes from "prop-types";

const Menu = ({ type, setShowLanguage, language }) => {
  return (
    <div className="main-option" onClick={() => setShowLanguage(type)}>
      <input value={language} />
      <div className="option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 25"
        >
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </div>
    </div>
  );
};

Menu.propTypes = {
  type: PropTypes.any.isRequired,
  setShowLanguage: PropTypes.any.isRequired,
  language: PropTypes.any.isRequired,
};

export default Menu;
