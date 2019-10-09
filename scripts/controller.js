client = mqtt.connect(" wss://test.mosquitto.org:8081/mqtt");
console.log("Successfully connected to wss://test.mosquitto.org:8081/mqtt @" + (moment().format('LLLL')))
client.on("connect", function () {
  client.subscribe("sugal/fan/status");
  $("#off").click(function () {
    client.publish("sugal/fan/status", "The fan is currently turned Off" + ",on " + (moment().format('LLLL')));
  })
  $("#1").click(function () {
    client.publish("sugal/fan/status", "The fan is currently turned 1" + ",on " + (moment().format('LLLL')));
  })
  $("#2").click(function () {
    client.publish("sugal/fan/status", "The fan is currently turned 2" + ",on " + (moment().format('LLLL')));
  })
  $("#3").click(function () {
    client.publish("sugal/fan/status", "The fan is currently turned 3" + " ,on " + (moment().format('LLLL')));
  })


  client.on("message", function (topic, payload) {
    var payload = payload.toString().split(",")
    console.log(payload.join(","))
    $("#try").text(payload[0])
  })

})
