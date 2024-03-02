import SVG from "./svg";
export default class HeaderIcon {
  name: string;
  link: string;
  svg: SVG;

  constructor(name: string, link: string, svg: SVG) {
    this.name = name;
    this.link = link;
    this.svg = svg;
  }
}
