import PropTypes from "prop-types";
import ButtonLoading from "../ButtonLoading/ButtonLoading";
import Paragraph from "../Paragraph/Paragraph";

const Button = (props) => {
  var {
    children = "button",
    fontSize = 14,
    fontWeight = "semi-bold",
    backgroundColor = "#000000",
    color = "#fff",
    hoverLight,
    hover,
    style,
    customClass,
    border,
    isLoading = false,
    buttonType = "button",
    ...restProps
  } = props;
  return (
    <>
      <button
        type={buttonType}
        style={{ border, background: backgroundColor, ...style }}
        className={`buttonContainer ${
          (hoverLight && "hover_light") || (hover && "hover") || ""
        }  ${customClass} ${isLoading && "loading_btn"}`}
        {...restProps}>
        {isLoading && <ButtonLoading />}
        <Paragraph
          color={color}
          style={{ letterSpacing: "1.5px" }}
          fontSize={fontSize}
          fontWeight={fontWeight}
          marginBottom="0">
          {children}
        </Paragraph>
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  hoverLight: PropTypes.bool,
  hover: PropTypes.bool,
};

export default Button;
