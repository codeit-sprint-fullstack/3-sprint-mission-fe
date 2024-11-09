import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

interface IRefreshButton {
  refresh: () => void;
}

const RefreshButton = ({ refresh }: IRefreshButton) => {
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
