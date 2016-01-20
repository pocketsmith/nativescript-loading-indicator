var application = require("application");

var indicator = {};

indicator.show = function(msg) {
  if (context = this._getContext()) {
    this._progressDialog = android.app.ProgressDialog.show(context, "", msg || "Loading");
    return this._progressDialog;
  }
};

indicator.hide = function() {
  if (this._progressDialog !== undefined) this._progressDialog.hide();
};

indicator._getContext = function() {
  return application.android.foregroundActivity;
};

module.exports = indicator;
