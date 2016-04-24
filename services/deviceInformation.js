/*
Name: Device Information
Type: org.bluetooth.service.device_information
Assigned Number: 0x180A

Abstract:
The Device Information Service exposes manufacturer and/or vendor information about a device.

Summary:
This service exposes manufacturer information about a device. The Device Information Service is instantiated as a Primary Service. Only one instance of the Device Information Service is exposed on a device.

Service Dependencies
This service is not dependent upon any other services.

https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.device_information.xml
*/



var firmwareRevisionStringCharacteristic = require('../characteristics/firmwareRevisionString.js');
var modelNumberStringCharacteristic = require('../characteristics/modelNumberString.js');
var serialNumberStringCharacteristic = require('../characteristics/serialNumberString.js');
var manufacturerNameStringCharacteristic = require('../characteristics/manufacturerNameString.js');



function deviceInformation(service) {

  service.discoverCharacteristics(null, function(error, characteristics) {

    for (var i in characteristics) {

      var characteristic = characteristics[i];
      var characteristicName = characteristic.name;

      switch(characteristicName) {
        case 'Manufacturer Name String':
          manufacturerNameStringCharacteristic(characteristic);
          break;
        case 'Model Number String':
          modelNumberStringCharacteristic(characteristic);
          break;
        case 'Serial Number String':
          serialNumberStringCharacteristic(characteristic);
          break;
        case 'Firmware Revision String':
          firmwareRevisionStringCharacteristic(characteristic);
          break;
      }

    }

  });

}



module.exports = deviceInformation;
