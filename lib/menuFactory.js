'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _baseStyles = require('./baseStyles');

var _baseStyles2 = _interopRequireDefault(_baseStyles);

var _BurgerIcon = require('./BurgerIcon');

var _BurgerIcon2 = _interopRequireDefault(_BurgerIcon);

var _CrossIcon = require('./CrossIcon');

var _CrossIcon2 = _interopRequireDefault(_CrossIcon);

var _menuConstructor = require('./menuConstructor');

var _menuConstructor2 = _interopRequireDefault(_menuConstructor);

exports['default'] = function (styles) {

  return (0, _radium2['default'])(_react2['default'].createClass({

    propTypes: {
      customBurgerIcon: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.oneOf([false])]),
      customCrossIcon: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.oneOf([false])]),
      id: _react2['default'].PropTypes.string,
      isOpen: _react2['default'].PropTypes.bool,
      noOverlay: _react2['default'].PropTypes.bool,
      onStateChange: _react2['default'].PropTypes.func,
      outerContainerId: styles && styles.outerContainer ? _react2['default'].PropTypes.string.isRequired : _react2['default'].PropTypes.string,
      pageWrapId: styles && styles.pageWrap ? _react2['default'].PropTypes.string.isRequired : _react2['default'].PropTypes.string,
      right: _react2['default'].PropTypes.bool,
      styles: _react2['default'].PropTypes.object,
      width: _react2['default'].PropTypes.number
    },

    getDefaultProps: function getDefaultProps() {
      return {
        id: '',
        noOverlay: false,
        collapseWidth: 99999,
        onStateChange: function onStateChange() {},
        outerContainerId: '',
        pageWrapId: '',
        styles: {},
        width: 300
      };
    },

    render: function render() {
      var canCollapse = window.innerWidth < this.props.collapseWidth;
      var Menu = (0, _menuConstructor2['default'])(styles);

      return canCollapse ? _react2['default'].createElement(Menu, this.props) : _react2['default'].createElement(Menu, _extends({}, this.props, {
        closeOnEsc: false,
        noOverlay: true,
        isOpen: true,
        customCrossIcon: false }));
    }
  }));
};

module.exports = exports['default'];