import chinese from './chinese';
import english from './english';
import {getCookie} from '../cookie';

let langCookie = getCookie('language');
let language;

switch (langCookie) {
  case 'chinese':
    language = chinese;
    break;
  case 'english':
    language = english;
    break;
  default :
    language = chinese;
}

export default language;
