"use strict";

import {headerMenu, Page} from "./modules/page-header";
import * as svg4everybody from "svg4everybody";

headerMenu.menuItemActive = Page.Contest;

svg4everybody({
  nosvg: true,
  polyfill: true
});
