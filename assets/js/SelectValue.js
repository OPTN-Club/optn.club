class SelectValue {
  constructor(id) {
    this.ele = document.getElementById(id);
  }

  get value() {
    return this.ele.options[this.ele.selectedIndex].text;
  }
}
