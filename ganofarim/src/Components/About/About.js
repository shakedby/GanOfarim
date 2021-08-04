import React from 'react';
import './About.css';
import homeimg from '../../Images/c3.png'

function About() {
    return (
        <section id="About">
            <div className="About" >
                <img className="img" src={homeimg}></img>
                <h2>   ...קצת על הגן</h2>
                <h3>הגן שלנו ממוקם במרכז ראשון לציון, בשכונת אברמוביץ</h3>
                <h4>נשמח לתת לכם עוד פרטים, צרו קשר 03-9655434</h4>
            </div>
        </section>
    )

}

export default About;


