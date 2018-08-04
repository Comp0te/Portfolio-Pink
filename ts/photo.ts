import "picturefill";
import "picturefill/dist/plugins/mutation/pf.mutation.min";
import * as svg4everybody from "svg4everybody";
import {Page} from "./modules/enums";
import headerMenu from "./modules/page-header";

svg4everybody({
  nosvg: true,
  polyfill: true,
});

headerMenu.menuItemActive = Page.Photo;
