import * as svg4everybody from "svg4everybody";
import {Page} from "./modules/enums";
import headerMenu from "./modules/page-header";

headerMenu.menuItemActive = Page.Contest;

svg4everybody({
  nosvg: true,
  polyfill: true,
});
