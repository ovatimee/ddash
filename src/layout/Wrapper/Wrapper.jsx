import classNames from "classnames";
import PropTypes from "prop-types";
import Content from "../Content/Content";
import WrapperOverlay from "./WrapperOverlay";
import HeaderRoutes from "../Header/HeaderRoutes";
import FooterRoutes from "../Footer/FooterRoutes";
export const WrapperContainer = ({ children, className, ...props }) => {
  // const { rightPanel } = useContext(ThemeContext);
  return (
    <div
      className={classNames(
        "wrapper",
        // { "wrapper-right-panel-active": rightPanel },
        className
      )}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </div>
  );
};
WrapperContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
WrapperContainer.defaultProps = {
  className: undefined,
};
const Wrapper = () => {
  return (
    <>
      <WrapperContainer>
        <HeaderRoutes />
        <Content />
        <FooterRoutes />
      </WrapperContainer>
      <WrapperOverlay />
    </>
  );
};
export default Wrapper;
