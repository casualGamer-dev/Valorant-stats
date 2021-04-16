import './../styles/Skins.css';
const axios = require('axios');

const hitSkins = () => {
    axios.get('http://localhost:8080/valcontent')
    .then((response) => {
        var i = 0;
        for(i;i<255;i++){
            console.log(response.data.skins[i].name)
        }
    
    })
}

const Skins = () => (
    <div class="whole3">
       <button type="submit" onClick={hitSkins}>All Weapon Skins</button>
    </div>
);

export default Skins;