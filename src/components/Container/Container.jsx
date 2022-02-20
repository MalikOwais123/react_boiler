import PropTypes from "prop-types";

const Container = ({
  background,
  children,
  flex = false,
  style = {},
  margin,
  padding,
  height,
  extraClass = "",
  ...restProps
}) => {
  return (
    <div
      className={`${extraClass} container ${!flex ? "fixedGrid" : "flexGrid"}`}
      style={{ background, margin, padding, height, ...style }}
      {...restProps}>
      <div className="gridChild">{children}</div>
    </div>
  );
};

Container.propTypes = {
  background: PropTypes.string,
  children: PropTypes.element,
  flex: PropTypes.bool,
  style: PropTypes.object,
  margin: PropTypes.string,
  padding: PropTypes.string,
  height: PropTypes.string,
};

export default Container;
