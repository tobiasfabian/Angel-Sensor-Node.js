/*
Name: Heart Rate
Type: org.bluetooth.service.heart_rate
Assigned Number: 0x180D

Abstract:
This service exposes heart rate and other data from a Heart Rate Sensor intended for fitness applications.

Summary:
The HEART RATE Service exposes heart rate and other data related to a heart rate sensor intended for fitness applications.

*/



var heartRateMeasurementCharacteristic = require('../characteristics/heartRateMeasurement.js');



function heartRateService(service) {

  service.discoverCharacteristics(null, function(error, characteristics) {

    for (var i in characteristics) {

      var characteristic = characteristics[i];
      var characteristicName = characteristic.name;

      switch(characteristicName) {
        case 'Heart Rate Measurement':
          heartRateMeasurementCharacteristic(characteristic);
          break;
      }

    }

  });

}



module.exports = heartRateService;
