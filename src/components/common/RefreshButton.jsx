import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const RefreshButton = ({ refresh }) => {
  return (
    <FontAwesomeIcon
      size="4x"
      style={{ cursor: "pointer" }}
      onClick={refresh}
      icon={faRotateRight}
    />
  );
};

export default RefreshButton;

RefreshButton.propTypes = {
  refresh: PropTypes.func,
};
