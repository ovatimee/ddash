import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
const TagWrapper = forwardRef(({ tag: Tag, children, ...props }, ref) => {
    return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Tag ref={ref} {...props}>
				{children}
			</Tag>);
});
TagWrapper.displayName = 'TagWrapper';
TagWrapper.propTypes = {
    tag: PropTypes.string,
    children: PropTypes.node.isRequired,
};
TagWrapper.defaultProps = {
    tag: 'div',
};
export default TagWrapper;
