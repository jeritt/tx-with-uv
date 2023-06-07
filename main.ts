radio.onReceivedNumber(function (receivedNumber) {
    radio.sendValue("T", BME280.temperature(BME280_T.T_C))
    basic.pause(100)
    radio.sendValue("RH", BME280.humidity())
    basic.pause(100)
    radio.sendValue("DP", BME280.Dewpoint())
    basic.pause(100)
    radio.sendValue("PRESS", BME280.pressure(BME280_P.hPa))
    basic.pause(100)
    radio.sendValue("RAIN", weatherbit.rain())
    basic.pause(100)
    radio.sendValue("WNDSPD", Math.round(weatherbit.windSpeed() * 10) / 10)
    basic.pause(100)
    radio.sendString(WINDDIR)
    basic.pause(100)
    radio.sendValue("UVA", gatorUV.UV())
    basic.pause(100)
})
function convertWindDir () {
    if (weatherbit.windDirection() != "???") {
        WINDDIR = weatherbit.windDirection()
    }
}
let WINDDIR = ""
radio.setGroup(1)
weatherbit.startWindMonitoring()
weatherbit.startRainMonitoring()
gatorUV.begin()
