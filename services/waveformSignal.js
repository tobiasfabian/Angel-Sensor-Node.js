/*
Waveform Signal Service
Service UUID: 481d178c-10dd-11e4-b514-b2227cce2b54

This service provides access to raw waveform signals sampled by the on-board sensors of the server.

The service was designed to enable research and advanced processing of various bio-feedback signals. The waveform signal access is an experimental feature – this protocol will be revised often (see Protocol Revision below).

Note: the first firwmware revisions of Angel Sensor will only support Optical Waveform and Acceleration Magnitude Waveform signals.

http://angelsensor.com/protocols/seraphim-sense/waveform-signal-service/

*/



var opticalWaveformCharacteristic = require('../characteristics/opticalWaveform.js');
var accelerationWaveformCharacteristic = require('../characteristics/accelerationWaveform.js');
var gyroscopeWaveformCharacteristic = require('../characteristics/gyroscopeWaveform.js');
var waveformSignalFeatureCharacteristic = require('../characteristics/waveformSignalFeature.js');
var protocolRevisionCharacteristic = require('../characteristics/protocolRevision.js');



function waveformSignalService(service) {

  // Set Service Name
  service.name = 'Waveform Signal';

  service.discoverCharacteristics(null, function(error, characteristics) {

    for (var i in characteristics) {

      var characteristic = characteristics[i];
      switch(characteristic.uuid) {
        case '334c0be876f9458bbb2e7df2b486b4d7':
          opticalWaveformCharacteristic(characteristic);
          break;
        case '4e92f4abc01b4b5ab328699856a7c2ee':
          accelerationWaveformCharacteristic(characteristic);
          break;
        case '4cb32ae60cfe47dca4f659f52cdc2910':
          waveformSignalFeatureCharacteristic(characteristic);
          break;
        case '3b8e7983133a4a0f90fc82006ed55505':
          protocolRevisionCharacteristic(characteristic, service);
          break;
        case '5df14ec3fed1442883bf28ade00b0d98':
          gyroscopeWaveformCharacteristic(characteristic);
          break;
      }

    }

  });

}



module.exports = waveformSignalService;
