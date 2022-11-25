import React, { forwardRef, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export const NavLinkDropdown = forwardRef(({ children, className, ...props }, ref) => {
    return (<span ref={ref} className={classNames('nav-link', 'cursor-pointer', className)} aria-current='page' 
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}>
				{children}
			</span>);
});
NavLinkDropdown.displayName = 'NavLinkDropdown';
NavLinkDropdown.propTypes = {
    // @ts-ignore
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
NavLinkDropdown.defaultProps = {
    className: undefined,
};
export const NavItem = forwardRef(({ children, className, isActive, isDisable, ...props }, ref) => {
    // @ts-ignore
    if (children.type.displayName === 'Dropdown') {
        // @ts-ignore
        return cloneElement(children, {
            tag: 'li',
            // @ts-ignore
            className: classNames(children.props.className, 'nav-item'),
        });
    }
    return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <li ref={ref} className={classNames('nav-item', className)} {...props}>
				{
        // @ts-ignore
        cloneElement(children, {
            className: classNames(
            // @ts-ignore
            children.props.className, { active: isActive, disabled: isDisable }, 'nav-link'),
        })}
			</li>);
});
NavItem.displayName = 'NavItem';
NavItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    isDisable: PropTypes.bool,
};
NavItem.defaultProps = {
    className: undefined,
    isActive: false,
    isDisable: false,
};
const Nav = forwardRef(({ tag: Tag, children, className, design, isFill, isJustified, isVertical, verticalBreakpoint, ...props }, ref) => {
    return (
    // @ts-ignore
    <Tag ref={ref} className={classNames('nav', {
            [`nav-${design}`]: design,
            'nav-fill': isFill,
            'nav-justified': isJustified,
        }, {
            [`flex${verticalBreakpoint ? `-${verticalBreakpoint}` : ''}-column`]: isVertical || !!verticalBreakpoint,
        }, className)} 
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}>
				{children}
			</Tag>);
});
Nav.displayName = 'Nav';
Nav.propTypes = {
    // @ts-ignore
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    tag: PropTypes.oneOf(['ul', 'nav']),
    design: PropTypes.oneOf(['tabs', 'pills']),
    isFill: PropTypes.bool,
    isJustified: PropTypes.bool,
    isVertical: PropTypes.bool,
    verticalBreakpoint: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
};
Nav.defaultProps = {
    className: undefined,
    tag: 'ul',
    design: 'pills',
    isFill: false,
    isJustified: false,
    isVertical: false,
    verticalBreakpoint: null,
};
export default Nav;
