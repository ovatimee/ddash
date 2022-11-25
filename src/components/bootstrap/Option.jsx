import React from 'react';
import PropTypes from 'prop-types';
const Option = ({ children, value, disabled, ariaLabelledby, ...props }) => {
    return (<option value={value} disabled={disabled} aria-labelledby={ariaLabelledby || children} 
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}>
			{children}
		</option>);
};
Option.propTypes = {
    children: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    ariaLabelledby: PropTypes.string,
};
Option.defaultProps = {
    disabled: false,
    ariaLabelledby: null,
};
// @ts-ignore
export const Options = ({ list }) => {
    return list?.map((item) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Option key={item.value} value={item.value} {...item}>
			{/* @ts-ignore */}
			{item.text || item.label}
		</Option>));
};
Options.propTypes = {
    // @ts-ignore
    list: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })).isRequired,
};
export default Option;
