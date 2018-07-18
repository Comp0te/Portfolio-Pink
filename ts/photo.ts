"use strict";

import "picturefill";
import "picturefill/dist/plugins/mutation/pf.mutation.min";
import * as svg4everybody from "svg4everybody";
import {headerMenu, Page} from "./modules/page-header";

svg4everybody({
  nosvg: true,
  polyfill: true,
});

headerMenu.menuItemActive = Page.Photo;
