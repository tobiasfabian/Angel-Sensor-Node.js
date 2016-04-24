/*
Name: Health Thermometer
Type: org.bluetooth.service.health_thermometer
Assigned Number: 0x1809

Abstract:
The Health Thermometer service exposes temperature and other data from a thermometer intended for healthcare and fitness applications.

Summary:
The Health Thermometer service is instantiated as a Primary Service. There are one or more instantiations of the Health Thermometer service per device claiming conformance with this specification.

*/


var temperatureTypeCharacteristic = require('../characteristics/temperatureType.js');
var temperatureMeasurementCharacteristic = require('../characteristics/temperatureMeasurement.js');

function healthThermometerService(service) {

  service.discoverCharacteristics(null, function(error, characteristics) {

    for (var i in characteristics) {

      var characteristic = characteristics[i];
      var characteristicName = characteristic.name;

      switch(characteristicName) {
        case 'Temperature Type':
          temperatureTypeCharacteristic(characteristic);
          break;
        case 'Temperature Measurement':
          temperatureMeasurementCharacteristic(characteristic);
          break;
      }

    }

  });

}

module.exports = healthThermometerService;
