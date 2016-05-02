/*
Waveform Signal Service
Service UUID: 68b52738-4a04-40e1-8f83-337a29c3284d

This service provides access to measurements related to physical activity and motion. To obtain these, a fitness tracker typically uses on-board accelerometer and gyroscope sensors.

http://angelsensor.com/protocols/seraphim-sense/activity-monitoring-service/

*/



var stepCountCharacteristic = require('../characteristics/stepCount.js');
var fallDetectionCharacteristic = require('../characteristics/fallDetection.js');
var activityMonitoringFeatureCharacteristic = require('../characteristics/activityMonitoringFeature.js');
var accelerationEnergyMagnitudeCharacteristic =  require('../characteristics/accelerationEnergyMagnitude.js');


function activityMonitoringService(service) {

  // Set Service Name
  service.name = 'Activity Monitoring';
  service.discoverCharacteristics(null, function(error, characteristics) {

    for (var i in characteristics) {
      var characteristic = characteristics[i];
      switch(characteristic.uuid) {
        case '2b7c87288afb4be7b9eb35156a443b70':
          activityMonitoringFeatureCharacteristic(characteristic);
        case '7a5433056b9e4878ad6729c5a9d99736':
          stepCountCharacteristic(characteristic);
          break;
        case '9e3bd0d7bdd841fdaf1f5e99679183ff':
          accelerationEnergyMagnitudeCharacteristic(characteristic);
          break;
        case '72f442a76ecd48518858403f0a7cab73':
          fallDetectionCharacteristicFeature(characteristic);
          break;
      }
    }

  });

}



module.exports = activityMonitoringService;
