/* eslint-env browser */

import './index.css';
import { anchorScroll, trackScroll } from '../utils/utils';

anchorScroll('.header__about-link', '.about');
anchorScroll('.button_type_order', '.order__form');
anchorScroll('.button_type_scroll', '.header');
anchorScroll('.button_type_examples', '.products');
anchorScroll('.lead__more', '.about');

window.addEventListener('scroll', trackScroll);
