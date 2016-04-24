# Angel Sensor Node.js
A Node.js library for Angel Sensor (M1).

## Getting started
Install dependencies and run `index.js`
```sh
npm install
node index.js
```

## Features
* Connects to an Angel Sensor
* Reads Device Information (Manufacturer Name, Model Number, Serial Number, Firmware Revision)
* Reads Temperature Type, Battery Level, Body Sensor Location
* Activates notifications for Heart Rate Measurement, Temperature Measurement, Battery Level, (Optical Waveform), (Acceleration Waveform), (Blood Oxygen Saturation Measurement)
* Notifies when one of those Characteristics sends a value

*Optical Waveform and Acceleration Waveform would produce a lot of outcome, so they are commented out. You can uncomment them to see the raw data. (`characteristics/opticalWaveform.js` (line 29) or `characteristics/accelerationWaveform.js` (line 23))*  
*Blood Oxygen Saturation Measurement does not yet output anything*

## Implemented Services
* [Battery](https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.battery_service.xml)
* [Device Information](https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.device_information.xml)
* [Health Thermometer](https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.health_thermometer.xml)
* [Heart Rate](https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.heart_rate.xml)
* [Waveform Signal](http://angelsensor.com/protocols/seraphim-sense/waveform-signal-service/)
* [Blood Oxygen Saturation](http://angelsensor.com/protocols/seraphim-sense/blood-oxygen-saturation-service/)

## Implemented Characteristics
* [Acceleration Waveform](http://angelsensor.com/protocols/seraphim-sense/waveform-signal-service/#acceleration-waveform-characteristic)
* [Battery Level](https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.battery_level.xml)
* [Blood Oxygen Saturation Measurement](http://angelsensor.com/protocols/seraphim-sense/blood-oxygen-saturation-service/#blood-oxygen-saturation-measurement-characteristic)
* [Body Sensor Location](https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.body_sensor_location.xml)
* [Firmware Revision](https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.firmware_revision_string.xml)
* [Heart Rate Measurement](https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.heart_rate_measurement.xml)
* [Manufacturer Name String](https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.manufacturer_name_string.xml)
* [Model Number String](https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.model_number_string.xml)
* [Optical Waveform](http://angelsensor.com/protocols/seraphim-sense/waveform-signal-service/#optical-waveform-characteristic)
* [Protocol Revision](http://angelsensor.com/protocols/seraphim-sense/blood-oxygen-saturation-service/#protocol-revision-characteristic)
* [Serial Number String](https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.serial_number_string.xml)
* [Temperature Measurement](https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.temperature_measurement.xml)
* [Temperature Type](https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.temperature_type.xml)

## TODO
* Get heart rate out of Optical and Acceleration Waveform
* Implement [Activity Monitoring Service](http://angelsensor.com/protocols/seraphim-sense/activity-monitoring-service/)
* Implement [Alarm Clock Service](http://angelsensor.com/protocols/seraphim-sense/alarm-clock-service/)
* Implement [Health Journal Service](http://angelsensor.com/protocols/seraphim-sense/health-journal-service/)
