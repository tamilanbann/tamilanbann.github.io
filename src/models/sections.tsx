export default class Section {
  name: string;
  ref: React.RefObject<any>;

  constructor(name: string, ref: React.RefObject<any>) {
    this.name = name;
    this.ref = ref;
  }
}
