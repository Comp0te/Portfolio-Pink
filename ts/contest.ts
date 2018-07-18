"use strict";

import * as svg4everybody from "svg4everybody";
import {headerMenu, Page} from "./modules/page-header";

headerMenu.menuItemActive = Page.Contest;

svg4everybody({
  nosvg: true,
  polyfill: true,
});
