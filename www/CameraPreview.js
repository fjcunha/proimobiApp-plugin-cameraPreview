var argscheck = require('cordova/argscheck'),
  utils = require('cordova/utils'),
  exec = require('cordova/exec');

var PLUGIN_NAME = "CameraPreview";

var CameraPreview = function() {};

CameraPreview.setOnPictureTakenHandler = function(onPictureTaken) {
  exec(onPictureTaken, onPictureTaken, PLUGIN_NAME, "setOnPictureTakenHandler", []);
};

CameraPreview.showMarker = function(param1,param2){
  console.log("Entrou showMarker");
  console.log("Parametros: " +param1+param2);
  exec(null,null,PLUGIN_NAME,"showMarker",[param1,param2]);
  console.log("passou showMarker");
};

CameraPreview.hideMarker = function(){
  console.log("entrou hideMarker");
  exec(null,null,PLUGIN_NAME,"hideMarker",[]);
  console.log("passou hideMarker");
};

CameraPreview.setLeft = function(visibility){
  console.log("setLeft: "+visibility);
  exec(null,null,PLUGIN_NAME,"setLeft",[visibility]);
}
CameraPreview.setRight = function(visibility){
  console.log("setRight: "+visibility);
  exec(null,null,PLUGIN_NAME,"setRight",[visibility]);
}

//@param rect {x: 0, y: 0, width: 100, height:100}
//@param defaultCamera "front" | "back"
CameraPreview.startCamera = function(rect, defaultCamera, tapEnabled, dragEnabled, toBack, alpha) {
  if (typeof(alpha) === 'undefined') alpha = 1;
  exec(null, null, PLUGIN_NAME, "startCamera", [rect.x, rect.y, rect.width, rect.height, defaultCamera, !!tapEnabled, !!dragEnabled, !!toBack, alpha]);
};
CameraPreview.stopCamera = function() {
  exec(null, null, PLUGIN_NAME, "stopCamera", []);
};
//@param size {maxWidth: 100, maxHeight:100}
CameraPreview.takePicture = function(size) {
  var params = [0, 0];
  if (size) {
    params = [size.maxWidth, size.maxHeight];
  }
  exec(null, null, PLUGIN_NAME, "takePicture", params);
};

CameraPreview.setColorEffect = function(effect) {
  exec(null, null, PLUGIN_NAME, "setColorEffect", [effect]);
};

CameraPreview.switchCamera = function() {
  exec(null, null, PLUGIN_NAME, "switchCamera", []);
};

CameraPreview.hide = function() {
  exec(null, null, PLUGIN_NAME, "hideCamera", []);
  console.log("Passei pelo cameraPreview.js");

};

CameraPreview.show = function() {
  exec(null, null, PLUGIN_NAME, "showCamera", []);
  console.log("Passei pelo cameraPreview.js");

};

CameraPreview.disable = function(disable) {
  exec(null, null, PLUGIN_NAME, "disable", [disable]);
};

module.exports = CameraPreview;
