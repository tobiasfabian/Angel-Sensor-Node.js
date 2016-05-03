function activityMonitoring(characteristic) {

  characteristic.read(function(error, data) {
    console.log('Acceleration sampling rate ', data.readUInt8(1));
    console.log('Gyroscope sampling rate ', data.readUInt8(2));
  });

  characteristic.on('read', function(data, isNotification) {
    if (isNotification) {
    console.log('Acceleration sampling rate ', data.readUInt8(1));
    console.log('Gyroscope sampling rate ', data.readUInt8(2));
    }
  });
}



module.exports = activityMonitoring;
