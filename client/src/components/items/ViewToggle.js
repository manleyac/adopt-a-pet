import { FaListUl } from "react-icons/fa";
import { FaTh } from "react-icons/fa";

const ViewToggle = (props) => {
  return props.view ? <FaListUl size={24} onClick={props.onClick}/> : <FaTh size={24} onClick={props.onClick}/>;
};

export default ViewToggle;
