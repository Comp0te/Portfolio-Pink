"use strict"

import {headerMenu, Page} from "./modules/page-header";
import * as svg4everybody from "svg4everybody";
import 'picturefill';
import 'picturefill/dist/plugins/mutation/pf.mutation.min';

headerMenu.menuItemActive = Page.Photo;

svg4everybody({
  nosvg: true,
  polyfill: true
});
