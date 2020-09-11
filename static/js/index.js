//https://www.eclipse.org/paho/clients/js/

a=0;
function accionled2(x,y){
console.log(et.innerText);
x=location.assign('/led2_on');
y=location.assign('/led2_off');
<!--a=a+1;
r=a%2;
	if (r==0)
	console.log('apagar led2');
		message = new Paho.MQTT.Message("LED1_OFF")
        message.destinationName = "link94j@gmail.com/test1";
        client.send(message);
		document.getElementById("estado2").innerHTML="led apagado";
	location.assign('/led2_off');
	}
    else{
	console.log('encender led2');
		message = new Paho.MQTT.Message("LED1_ON");
        message.destinationName = "link94j@gmail.com/test1";
        client.send(message);
		document.getElementById("estado2").innerHTML="led encendido";
	location.assign('/led2_on');
	}


// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "link94j@gmail.com",
    password: "123456",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("link94j@gmail.com/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "link94j@gmail.com/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
  }
  
