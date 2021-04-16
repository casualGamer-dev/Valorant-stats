import './../styles/Leaderboard.css';
const axios = require('axios');

const hitLeaderboard = () => {
    axios.get('http://localhost:8080/leaderboard')
    .then((response) => {
    var i = 0;
    for(i;i<100;i++){
        
        console.log('Rank: ' + (i+1) + ' ' + response.data.players[i].gameName);
    }
    })
}

const Leaderboard = () => (
    <div className="main">
         <button type="submit" onClick={hitLeaderboard}>Top 100 Leaderboard</button>
    </div> 
);

export default Leaderboard;