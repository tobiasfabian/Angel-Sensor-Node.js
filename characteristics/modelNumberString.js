/*
Name: Model Number String
Type: org.bluetooth.characteristic.model_number_string
Assigned Number: 0x2A24

Abstract:
The value of this characteristic is a UTF-8 string representing the model number assigned by the device vendor.

https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.model_number_string.xml
*/



function modelNumberString(characteristic) {

  characteristic.read(function(error, data) {
    console.log('Model Number: ', data.toString());
  });

}



module.exports = modelNumberString;
