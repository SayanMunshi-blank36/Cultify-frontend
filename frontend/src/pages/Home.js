import React from 'react';
import Feed from '../componenets/Feed/Feed';
import Navbar from '../componenets/Navbar/Navbar';
import RightSeaction from '../componenets/RightSection/RightSeaction';

function Home() {
  return (
    <div className='homePage'>
        <Navbar/>
        <div style = {{width : "100%", display : "flex", justifyContent : "space-between",}}>
        <Feed/>
        <RightSeaction/>
        </div>
    </div>
  );
}

export default Home;
