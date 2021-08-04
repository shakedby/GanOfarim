import React, { Fragment } from 'react';
import './Home.css';
import homeimg from '../../Images/homepageee.jpg';
import Activities from '../Activities/Activities';
import About from '../About/About';



function Home() {
    return (
        <Fragment>
            <div className='Home'>
                {/* <img className='img1' src={homeimg}>
            </img> */}
                <h6>ברוכים הבאים לגן עופרים</h6>


                <About />
                <Activities />



            </div>

        </Fragment>
    )

}

export default Home;
