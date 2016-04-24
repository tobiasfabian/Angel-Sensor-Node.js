/*
Blood Oxygen Saturation Service
Service UUID: 902dcf38-ccc0-4902-b22c-70cab5ee5df2

http://angelsensor.com/protocols/seraphim-sense/blood-oxygen-saturation-service/
*/



var bodySensorLocationCharacteristic = require('../characteristics/bodySensorLocation.js');
var bloodOxygenSaturationMeasurementCharacteristic = require('../characteristics/bloodOxygenSaturationMeasurement.js');
var protocolRevisionCharacteristic = require('../characteristics/protocolRevision.js');



function bloodOxygenSaturationService(service) {

  service.name = 'Blood Oxygen Saturation';

  service.discoverCharacteristics(null, function(error, characteristics) {

    for (var i in characteristics) {

      var characteristic = characteristics[i];

      switch(characteristic.uuid) {
        case 'b269c33fdf6b4c32801d1b963190bc71':
          bloodOxygenSaturationMeasurementCharacteristic(characteristic);
          break;
        case '2a38':
          bodySensorLocationCharacteristic(characteristic);
          break;
        case '3b8e7983133a4a0f90fc82006ed55505':
          protocolRevisionCharacteristic(characteristic, service);
          break;
      }

    }

  });

}



module.exports = bloodOxygenSaturationService;
