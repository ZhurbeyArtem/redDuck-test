//Two easy tasks before you apply for an interview

//Задача: не змінюючи логіки, змінити структуру коду, щоби вона відповідала принципу DRY:
ctx.prototype._applyKeys = function (keys, source, target, transform) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    target[key] = transform ? transform(source[key]) : source[key];
  }
};

ctx.prototype.applyStyleState = function (styleState) {
  this._applyKeys(Object.keys(styleState), styleState, this);
};

ctx.prototype.setDefaultStyles = function () {
  this._applyKeys(Object.keys(STYLES), STYLES, this, (style) => style.canvas);
};

ctx.prototype.__getStyleState = function () {
  const styleState = {};
  this._applyKeys(Object.keys(STYLES), this, styleState);
  return styleState;
};

