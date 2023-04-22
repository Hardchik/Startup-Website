import React from 'react';

import './About.css';
import Dotline from '../Dotline';

function About() {

    return (
        <div className="about" id="about" style={{ backgroundColor: 'white' }}>
            {/* <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: 'black' }}></div>
                <div className="style-circle" style={{ backgroundColor: 'black' }}></div>
                <div className="style-line" style={{ backgroundColor: 'black' }}></div>
            </div> */}
            <Dotline/>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{ color: 'black'  }}>ABOUT-US</h2>
                    <p style={{ color: 'black' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.


                        <br /><br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
                    </p>
                </div>
                <div className="about-img">
                    <img
                       
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSUJXuNpP88UbAG9p6JuxnBZu2MNkGcDFrrQ&usqp=CAU'}
                        alt=""
                    />
                </div>
            </div>
           
            

            

        </div>

    )
}

export default About
