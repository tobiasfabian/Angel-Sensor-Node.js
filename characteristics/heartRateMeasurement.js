/*
Name: Heart Rate Measurement
Type: org.bluetooth.characteristic.heart_rate_measurement
Assigned Number: 0x2A37
*/

function heartRateMeasurement(characteristic) {

  var heartRate = 0;
  var lastHeartBeat = undefined;
  var heartRateInterval = undefined;

  function artificialHeartBeat() {
    var date = new Date();
    sendBeat('arti')
    lastHeartBeat = date;
  }

  function sendBeat(from) {
    var now = new Date();
    if (angelSensor.state == 'connected') {
      if (!lastHeartBeat) {
        console.log(now + ' ' + now.getMilliseconds() + 'First Beat ' + from);
        SOCKET.emit('beep', null);
      } else {
        if (lastHeartBeat < new Date(now.getTime() - 500)) {
          console.log(now + ' ' + now.getMilliseconds() + 'Beat ' + from)
          SOCKET.emit('beep', null);
        } else {
          console.log(now + ' ' + now.getMilliseconds() + 'No Beat ' + from)
        }
      }
    }
  }

  characteristic.on('read', function(data, isNotification) {
    heartRate = data.readUInt16LE(1);
    var date = new Date();
    console.log('Heart Rate Measurement: ' + heartRate + ' bpm');
    sendBeat('sensor');
    clearInterval(heartRateInterval);
    heartRateInterval = setInterval(artificialHeartBeat, 1 / (heartRate / 60) * 1000);
    lastHeartBeat = date;
  });

  characteristic.notify(true, function(error) {
    console.log('Heart Rate Measurement notification on');
  });

}

module.exports = heartRateMeasurement;
