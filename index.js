var noble = require("noble");

var heartRateService = require('./services/heartRate.js');
var healthThermometerService = require('./services/healthThermometer.js');
var batteryService = require('./services/battery.js');
var deviceInformationService = require('./services/deviceInformation.js');
var waveformSignalService = require('./services/waveformSignal.js');
var bloodOxygenSaturationService = require('./services/bloodOxygenSaturation.js');
var activityMonitoringService = require('./services/activityMonitoring.js');



noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning();
    console.log('Searching for Angel Sensor')
  } else {
    noble.stopScanning();
  }
});



noble.on('discover', function(peripheral) {

  // console.log(peripheral.advertisement.localName);

  if (peripheral.advertisement.localName && peripheral.advertisement.localName.indexOf('Angel Sensor') > -1) {

    angelSensor = peripheral;
    console.log('connected to ' + angelSensor.advertisement.localName);
    console.log('UUID: ' + angelSensor.uuid);
    console.log('Address: ' + angelSensor.address);

    angelSensor.connect(function(error) {

      angelSensor.discoverServices(null, function(error, services) {
        for (var i in services) {
          var service = services[i];
          var serviceUuid = service.uuid;
          switch(serviceUuid) {
            case '180d':
              heartRateService(service);
              break;
            case '1809':
              healthThermometerService(service);
              break;
            case '180f':
              batteryService(service);
              break;
            case '180a':
              deviceInformationService(service);
              break;
            case '481d178c10dd11e4b514b2227cce2b54':
              waveformSignalService(service);
              break;
            case '902dcf38ccc04902b22c70cab5ee5df2':
              bloodOxygenSaturationService(service);
              break;
            case '68b527384a0440e18f83337a29c3284d':
              activityMonitoringService(service);
              break;
          }
        }

      });

    });

    peripheral.once('disconnect', function() {

      console.log('peripheral disconnected: ' + peripheral.advertisement.localName);

    });

  }

});
