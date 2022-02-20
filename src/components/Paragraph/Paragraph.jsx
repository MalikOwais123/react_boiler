import PropTypes from "prop-types";
import ButtonLoading from "../ButtonLoading/ButtonLoading";

var fontWeightComputation = (weight) => {
  var value = 300;
  switch (weight) {
    case "light":
      value = 300;
      break;
    case "regular":
      value = 400;
      break;
    case "medium":
      value = 500;
      break;
    case "semi-bold":
      value = 600;
      break;
    case "bold":
      value = 700;
      break;
    default:
      break;
  }
  return value;
};

const Paragraph = (props) => {
  var {
    children: content = "Paragraph",
    fontSize = 16,
    color = "black",
    fontWeight = "regular",
    style = {},
    customClass = "",
    marginBottom = "10",
    lineHeight = "1.5",
    ...restProps
  } = props;
  var fontWeightValue = fontWeightComputation(fontWeight);
  return (
    <p
      className={customClass}
      style={{
        fontSize: `${fontSize}px`,
        color,
        marginBottom: `${marginBottom}px`,
        fontWeight: fontWeightValue,
        lineHeight: `${lineHeight}`,
        ...style,
      }}
      {...restProps}>
      {content}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string,
  fontWeight: PropTypes.string,
  style: PropTypes.object,
  customClass: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
};

export default Paragraph;
