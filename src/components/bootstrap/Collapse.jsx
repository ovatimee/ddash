import React, { useRef, useState, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { omit, pick, TransitionTimeouts, TransitionPropTypeKeys, TransitionStatuses, tagPropType, } from './utils';
const transitionStatusToClassHash = {
    [TransitionStatuses.ENTERING]: 'collapsing',
    [TransitionStatuses.ENTERED]: 'collapse show',
    [TransitionStatuses.EXITING]: 'collapsing',
    [TransitionStatuses.EXITED]: 'collapse',
};
const getTransitionClass = (status) => {
    return transitionStatusToClassHash[status] || 'collapse';
};
const getHeight = (node) => {
    // @ts-ignore
    return node.scrollHeight;
};
const Collapse = ({ tag: Tag, isOpen, className, isNavbar, children, isChildClone, ...props }) => {
    const ref = useRef(null);
    const NODE = ref.current;
    const [height, setHeight] = useState(null);
    const onEntering = (isAppearing) => {
        setHeight(getHeight(NODE));
        // @ts-ignore
        props.onEntering(NODE, isAppearing);
    };
    const onEntered = (isAppearing) => {
        setHeight(null);
        // @ts-ignore
        props.onEntered(NODE, isAppearing);
    };
    const onExit = () => {
        setHeight(getHeight(NODE));
        // @ts-ignore
        props.onExit(NODE);
    };
    const onExiting = () => {
        // getting this variable triggers a reflow
        // @ts-ignore
        const UNUSED = NODE.offsetHeight;
        setHeight(0);
        // @ts-ignore
        props.onExiting(NODE);
    };
    const onExited = () => {
        setHeight(null);
        // @ts-ignore
        props.onExited(NODE);
    };
    const transitionProps = pick(props, TransitionPropTypeKeys);
    const childProps = omit(props, TransitionPropTypeKeys);
    return (
    // @ts-ignore
    <Transition nodeRef={ref} 
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...transitionProps} in={isOpen} onEntering={onEntering} onEntered={onEntered} onExit={onExit} onExiting={onExiting} onExited={onExited}>
			{(status) => {
            const collapseClass = getTransitionClass(status);
            const classes = classNames(className, collapseClass, isNavbar && 'navbar-collapse');
            const style = height === null ? null : { height };
            if (isChildClone) {
                // @ts-ignore
                return cloneElement(children, {
                    ref,
                    // @ts-ignore
                    style: { ...childProps.style, ...style },
                    // @ts-ignore
                    className: classNames(classes, children.props.className),
                    ...childProps,
                });
            }
            return (<Tag 
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...childProps} 
            // @ts-ignore
            style={{ ...childProps.style, ...style }} className={classes} ref={ref}>
						{children}
					</Tag>);
        }}
		</Transition>);
};
Collapse.propTypes = {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    // @ts-ignore
    ...Transition.propTypes,
    isOpen: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    tag: tagPropType,
    className: PropTypes.node,
    isNavbar: PropTypes.bool,
    isChildClone: PropTypes.bool,
};
Collapse.defaultProps = {
    // @ts-ignore
    ...Transition.defaultProps,
    isOpen: false,
    appear: false,
    enter: true,
    exit: true,
    tag: 'div',
    timeout: TransitionTimeouts.Collapse,
    isChildClone: false,
    isNavbar: false,
};
export default Collapse;
