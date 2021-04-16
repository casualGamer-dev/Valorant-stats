import React, {useState, useEffect} from 'react';
import './../styles/Maps.css';
// const axios = require('axios');



// const hitMaps = () => {
//     axios.get('http://localhost:8080/valcontent')
//     .then((response) => {
//         var i = 1;
//         for(i;i<7;i++){
//             console.log(response.data.maps[i].name)
//         }
//     })
// }

const MapsScreen = () => (
<div class="whole2">
<table>
  <tr>
    <td>
        <div class="container">
          <img src="https://fortskins.org/wp-content/uploads/2020/07/bind-valorant-map-f-1024x597.jpg" alt="failed to load"></img>
          <div class="overlay">
            <div class="text">Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.</div>
          </div>
        </div>
        <br></br><h3 class="maptext">Bind</h3>
    </td>
    <td>
        <div class="container">
          <img src="https://cdn1.dotesports.com/wp-content/uploads/2020/09/16094045/EZddUWTWAAAf3nV.jpg" alt="failed to load"></img>
          <div class="overlay">
            <div class="text">An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.</div>
          </div>
        </div>
        <br></br><h3 class="maptext">Ascent</h3>
    </td>
    <td>
        <div class="container">
          <img src="https://fortskins.org/wp-content/uploads/2020/07/Haven-Valorant-Map-f.jpg" alt="failed to load"></img>
          <div class="overlay">
            <div class="text">Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.</div>
          </div>
        </div>
        <br></br><h3 class="maptext">Haven</h3>
    </td>
  </tr>
  <tr>
  <td>
        <div class="container">
          <img src="https://www.dailyesports.gg/wp-content/uploads/2020/10/960x0-1.jpg" alt="failed to load"></img>
          <div class="overlay">
            <div class="text">Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.</div>
          </div>
        </div>
        <br></br><h3 class="maptext">Icebox</h3>
    </td>
    <td>
        <div class="container">
          <img src="https://static.wikia.nocookie.net/valorant/images/d/d6/Loading_Screen_Split.png" alt="failed to load"></img>
          <div class="overlay">
            <div class="text">If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.</div>
          </div>
        </div>
        <br></br><h3 class="maptext">Split</h3>
    </td>
  </tr>
  
</table>
</div>
);


export default MapsScreen;