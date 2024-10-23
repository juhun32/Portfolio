import React from 'react';

const Header = () => {
    return (
        <header>
            {/* <h1>My Simple Website</h1> */}
            <nav>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#information">INFORMATION</a></li>
                    <li><a href="#statistics">STATISTICS</a></li>
                    {/* <li><a href="#service">SERVICE</a></li> */}
                    <li><a href="#resource">RESOURCE</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
