Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

function helloWorld() {
  //this.wrappedJSObject = this;
}
helloWorld.prototype = {

  // this must match whatever is in chrome.manifest!
  classID: Components.ID("{973fe50f-59fb-403a-bec0-ece4f44e3cde}"),

  QueryInterface: XPCOMUtils.generateQI([Components.interfaces.nsISupports]),

  hello: function() {
    return "Hello World!";
  }
};

// The following line is what XPCOM uses to create components. Each component prototype
// must have a .classID which is used to create it.
const NSGetFactory = XPCOMUtils.generateNSGetFactory([helloWorld]);

dump('HEREHEREHEREHERE');