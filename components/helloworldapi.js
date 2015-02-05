Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

function helloWorld() {
  //this.wrappedJSObject = this;
}
helloWorld.prototype = {

  // this must match whatever is in chrome.manifest!
  classID: Components.ID("{a5d89cee-85f4-44ad-b8eb-39ad39170823}"),

  QueryInterface: XPCOMUtils.generateQI([Components.interfaces.nsISupports]),

  hello: function() {
    return "Hello World!";
  }
};

// The following line is what XPCOM uses to create components. Each component prototype
// must have a .classID which is used to create it.
const NSGetFactory = XPCOMUtils.generateNSGetFactory([helloWorld]);

dump('HEREHEREHEREHERE');