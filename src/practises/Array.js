Array.prototype.myReduce = function (fn, init) {
  let i = 0;
  let pre = init;
  if (init == undefined) {
    pre = this[0];
    i = 1;
  }
  for (let i = 0; i < this.length; i++) {
    pre = fn.call(this, pre, this[i], i, this);
  }
  return pre;
};

Array.prototype.mymap = function (callback) {
  const arr = [];
  if (typeof callback !== "function") {
    throw new Error("must be a fuction");
  }
  for (let i = 0; i < this.length; i++) {
    arr.push(callback.call(this, this[i], i));
  }
  return arr;
};
