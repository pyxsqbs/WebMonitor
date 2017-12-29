'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chinese = require('./chinese');

var _chinese2 = _interopRequireDefault(_chinese);

var _english = require('./english');

var _english2 = _interopRequireDefault(_english);

var _cookie = require('../cookie');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var langCookie = (0, _cookie.getCookie)('language');
var language = void 0;

switch (langCookie) {
  case 'chinese':
    language = _chinese2.default;
    break;
  case 'english':
    language = _english2.default;
    break;
  default:
    language = _chinese2.default;
}

exports.default = language;

//# sourceMappingURL=index-compiled.js.map