/*
Name: Battery Service
Type: org.bluetooth.service.battery_service
Assigned Number: 0x180F

Abstract:
The Battery Service exposes the state of a battery within a device.

Summary:
The Battery Service exposes the Battery State and Battery Level of a single battery or set of batteries in a device.

Service Dependencies
This service has no dependencies on other GATT-based services.

https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.battery_service.xml

*/



var batteryLevelCharacteristic = require('../characteristics/batteryLevel.js');



function batteryService(service) {

  service.discoverCharacteristics(null, function(error, characteristics) {

    for (var i in characteristics) {

      var characteristic = characteristics[i];
      var characteristicName = characteristic.name;

      switch(characteristicName) {
        case 'Battery Level':
          batteryLevelCharacteristic(characteristic);
          break;
      }

    }

  });

}



module.exports = batteryService;
