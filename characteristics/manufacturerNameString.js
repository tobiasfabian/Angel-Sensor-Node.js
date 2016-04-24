/*
Name: Manufacturer Name String
Type: org.bluetooth.characteristic.manufacturer_name_string
Assigned Number: 0x2A29

Abstract:
The value of this characteristic is a UTF-8 string representing the name of the manufacturer of the device.

https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.manufacturer_name_string.xml
*/



function manufacturerNameString(characteristic) {

  characteristic.read(function(error, data) {
    console.log('Manufacturer Name: ', data.toString());
  });

}



module.exports = manufacturerNameString;
