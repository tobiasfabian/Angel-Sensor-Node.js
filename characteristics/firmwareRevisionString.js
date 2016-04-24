/*
Name: Firmware Revision String
Type: org.bluetooth.characteristic.firmware_revision_string
Assigned Number: 0x2A26

Summary:
The value of this characteristic is a UTF-8 string representing the firmware revision for the firmware within the device.

https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.firmware_revision_string.xml
*/



function firmwareRevisionString(characteristic) {

  characteristic.read(function(error, data) {
    console.log('Firmware Revision: ', data.toString());
  });

}



module.exports = firmwareRevisionString;
