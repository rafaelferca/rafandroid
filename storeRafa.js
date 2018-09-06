import { createStore } from 'redux'
import DeviceInfo from 'react-native-device-info';

export const stateManager = (state = 'Click on a Button !', action) => {
  switch (action.type) {
  case 'SHOWMETIME':
    return showMeTime();
  case 'GETGEOINFO':
    return getGeoInfo();
  case 'GETCARRIER':  
    return "Carrier: " + DeviceInfo.getCarrier();    
  case 'GETDEVICECOUNTRY':  
    return "Device Country: " +DeviceInfo.getDeviceCountry();    
  case 'GETAPILEVEL':  
    return "Android Api level " + DeviceInfo.getAPILevel();    
  default:
    return state;
  }
}

function showMeTime() {
    var time = new Date();
    var minutes =  time.getMinutes();
    var seconds = time.getSeconds();

    if(minutes <10) {
       minutes="0" + minutes;
    }
    if(seconds <10) {
       seconds="0" + seconds;
    }

    var strTime = time.getHours() + ":" + minutes + ":" + seconds;
    return 'The time is : ' + strTime;
}

function getGeoInfo() {
 fetch('https://ipapi.co/json/', {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
    })
    .then(response => { return response.json();})
    .then((responseJson) => {
        showGeoInfo(responseJson);      
     })
    .catch(err => {
        console.log("fetch error" + err);
    });
}


function showGeoInfo(res) {
    var info = "Your Ip Address is: " + res.ip + "\n" + "You are in : " + res.city + "(" + res.country_name + ")";
    alert(info);
}


let store = createStore(stateManager);

export default store;