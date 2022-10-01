//快照沙箱原生实现,单应用中可以用如下方式实现,多应用用proxy
class SnaptSanbox {
  constructor() {
    this.proxy = window;
    this.modifyProperty = {};
  }
  active() {
    for (const key in window) {
      let windowSnap = {};
      if (Object.hasOwnProperty.call(window, key)) {
        windowSnap[key] = window[key];
      }
      Object.keys(this.modifyProperty).forEach((p) => {
        window[p] = this.modifyProperty[p];
      });
    }
  }
  inactive() {
    for (const key in window) {
      if (Object.hasOwnProperty.call(window, key)) {
        if (window[key] !== this.windowSnap[key]) {
          this.modifyProperty[key] = window[key];
          window[key] = this.windowSnap[key];
        }
      }
    }
  }
}

const snaptSanbox = new SnaptSanbox()((window) => {
  window.a = 1;
})(snaptSanbox.proxy);
