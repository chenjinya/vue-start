
const util = {
  isIpad: function () {
    if (navigator.userAgent.match(/iPad/)) {
      return true;
    } else {
      return false;
    }
  },
  isIphone: function () {
    if (navigator.userAgent.match(/iPhone/)) {
      return true;
    } else {
      return false;
    }
  },
  isIOS: function () {
    if (this.isIpad() || this.isIphone()) {
      return true;
    } else {
      return false;
    }
  },
  isAndroid: function () {
    if (navigator.userAgent.match(/Android/)) {
      return true;
    } else {
      return false;
    }
  },
};

export default util
