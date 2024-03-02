export default class SVG {
  viewBox: string;
  path: string;
  constructor(viewBox: string, path: string) {
    this.viewBox = viewBox;
    this.path = path;
  }
}
