'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import baseStyles from './baseStyles';
import BurgerIcon from './BurgerIcon';
import CrossIcon from './CrossIcon';
import menuConstructor from './menuConstructor';

export default (styles) => {

  return React.createClass({

    propTypes: {
      customBurgerIcon: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.oneOf([false])]),
      customCrossIcon: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.oneOf([false])]),
      id: React.PropTypes.string,
      isOpen: React.PropTypes.bool,
      noOverlay: React.PropTypes.bool,
      onStateChange: React.PropTypes.func,
      outerContainerId: styles && styles.outerContainer ? React.PropTypes.string.isRequired : React.PropTypes.string,
      pageWrapId: styles && styles.pageWrap ? React.PropTypes.string.isRequired : React.PropTypes.string,
      right: React.PropTypes.bool,
      styles: React.PropTypes.object,
      width: React.PropTypes.number
    },

    getDefaultProps() {
      return {
        id: '',
        noOverlay: false,
        collapseWidth: 99999,
        onStateChange: () => {},
        outerContainerId: '',
        pageWrapId: '',
        styles: {},
        width: 300
      };
    },
    componentDidMount() {
      window.addEventListener("resize", e => this.forceUpdate());
    },
    componentWillUnmount() {
      window.removeEventListener("resize", e => this.forceUpdate());
    },

    render() {
      const canCollapse = window.innerWidth < this.props.collapseWidth;
      if (canCollapse) {
        const Menu = menuConstructor(styles);

        return  <Menu {...this.props}/>
      } else {
        /* If menu is docked (can't be closed), we don't animate */
        const staticStyles = {
          pageWrap(isOpen, width, right) {
            return { ["padding"+(right ? "Right" : "Left")]: width  + 'px' }
          }
        }
        const Menu = menuConstructor(staticStyles);

        return  <Menu {...this.props}
                  closeOnEsc={false}
                  noOverlay={true}
                  isOpen={true}
                  customCrossIcon={false} />
      }
    }
  });
};
