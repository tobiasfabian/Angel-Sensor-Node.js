/*
Name: Serial Number String
Type: org.bluetooth.characteristic.serial_number_string
Assigned Number: 0x2A25
Abstract:
The value of this characteristic is a variable-length UTF-8 string representing the serial number for a particular instance of the device.

https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.serial_number_string.xml
*/



function serialNumberString(characteristic) {

  characteristic.read(function(error, data) {
    console.log('Serial Number: ', data.toString());
  });

}



module.exports = serialNumberString;
