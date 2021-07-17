"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

// type Props = {
//     label: string;
//     backgroundColor: string;
//     onClick: () => void;
// }
function Button(_ref) {
  var label = _ref.label,
      backgroundColor = _ref.backgroundColor,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, label);
}

Button.defaultProps = {
  backgroundColor: null,
  onClick: undefined
};