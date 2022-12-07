import '../App.css';
import React, { useRef, useEffect } from 'react';

function Home() {
    return (
      <div className='home-div'>
        <div className='heading-div'>
        <h1 className='page-header'>
        MY PORTFOLIO
        </h1>
        <p 
        className='bio' id="bio">Hello, my name is ____ and I am a Junior at Brown University studying Computer Science.
          It is hard for me to pick what is my favorite field, which is why I enjoy taking a variety of Computer
          Science classes. I hope you enjoy my portfolio!
        </p>
        </div>
        <div className="portfolio-items">

          <div className="my-div-item-1">
            <h3 className='item-header'>Responsive Redesign</h3>
            <p className='item-text'><b>Description:</b> 
            <br/>
            For this project I took a website, and styled it differently while ensuring to maintain a responsive
            design.</p>
            <a className="button-2" href="https://watercup1000.github.io/responsive-design/" target="_blank">View In More Detail</a>
          </div>

          <div className='my-div-item-2'>
            <h3 className='item-header'>Development</h3>
            <p className='item-text'><b>Description:</b>
            <br/>
            For this project I made a website where a user can shop for drinks. The user can add sort and filter
            through drinks and add and remove drinks for the user's cart.
            </p>
            <a className="button-2" href="https://watercup1000.github.io/development/" target="_blank">View In More Detail</a>
          </div>

          <div className='my-div-item-3'>
            <h3 className='item-header'>Personas Storyboarding</h3>
            <p className='item-text'><b>Description:</b>
            <br/>
            For this project I examined a drink dispensing machine and constructed both personas and stroyboards 
            for the drink dispensing interface. 
            </p>
            <a className="button-2" href="https://watercup1000.github.io/Personas-Storyboarding/" target="_blank">View In More Detail</a>
          </div>

          <div className='my-div-item-4'>
            <h3 className='item-header'>Song Selector</h3>
            <p className='item-text'><b>Description:</b>
            <br/>
            For this project I constructed a website that selects a Playboi Carti song for you to listen
            to from a variety of factors.
            </p>
            <a className="button-2" href="https://carti-selecter.itsthemoon.vercel.app/" target="_blank">View In More Detail</a>
          </div>
        </div>
        
        </div>
    );
  }
  
  export default Home;