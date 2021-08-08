import React from 'react';
import './About.css';
import homeimg from '../../Images/c3.png'

function About() {
    return (
        <section id="About">
            <div className="About" >
                {/* <img className="img" src={homeimg}></img> */}
                <p>
                    ...קצת על הגן
                    <br />
                    הגן שלנו ממוקדם במרכז ראשון לציון, שכונת ארמוביץ
                    <br />
                    נשמח לתת עוד פרטים 03-9655434
                </p>
            </div>
        </section>
    )

}

export default About;


