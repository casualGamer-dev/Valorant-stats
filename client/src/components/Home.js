import './../styles/Home.css';

const SearchBar = () => (
        <div className="homescreen">
                <div class="leftimage">
                        <img src="https://wallpaperaccess.com/full/3037903.jpg"></img>
                </div>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
                <form action="">
                        <input type="search" placeholder="Playername#NA1" align="top"></input>
                                <i class="fa fa-search"></i>
                </form>

                <div class="rightimage">
                        <img src="https://wallpaperaccess.com/full/3037903.jpg"></img>
                </div>
    </div>
);

export default SearchBar;