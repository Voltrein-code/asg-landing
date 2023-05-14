/* eslint-env browser */

import './index.css';
import { anchorScroll, trackScroll } from '../utils/utils';

anchorScroll('.header__about-link', '.about');
anchorScroll('.button_type_order', '.order__form');
anchorScroll('.button_type_scroll', '.header');

window.addEventListener('scroll', trackScroll);
