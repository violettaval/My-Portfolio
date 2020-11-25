import React from "react";
import Footer from "../Footer";
import "./../Assets/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import VI from "./../Assets/Images/VI.jpg";

const styles = {
  pic: {
    padding: 10,
    width: 300,
    height: 300
  },
  content: {
    background: "white",
    padding: "20px",
    margin: "20px",
    marginLeft: "24px"
  }
};

function About() {
  return (
    <div>
      <div classname="row">
        <br />
      </div>
      <div classname="row">
        <div classname="col-md-8 col-xs-12" style={styles.content}>
          <h2>About Me</h2>
          <hr />
          <p>
            <span>
              <img id="profilePic" style={styles.pic} src={VI} alt="aboutPagePic" />
            </span>
            Hi, I go by Violet nowadays. I am a nerdy 28 year old Latinx transwoman.
          </p>
          <h1>Where I'm From</h1>
          <p>Minneapolis, Minnesota been living here almost all my life. 
            And love it here I enjoy the long summer days and cold winter scenery.</p>
          <h1>What are your favorite hobbies?</h1>
          <p>I have lots of hobbies from gathering collectibles, keeping up with the latest tv series and movies,
            to building with lego, and playing rpgs. I am deep in the nerd culture.</p>
          <h1>What's your dream job?</h1>
          <p>Games are my passion so programming video games would be nice. 
            I have not heard great things about the video game industry. So I would love to develop my own indie games and projects. </p>
          <h1>Where do you live?</h1>
          <p>I just recently moved back to stay with my mom during the class. And still moving out from my old apartment.</p>
          <h1>Why do you want to be a web developer?</h1>
          <p>I grew up as the internet has been evolving into its current state. I have always wanted to learn coding but have never had access to the resources. 
            None of my family has gone into the tech industry being the first means a lot to me. Also I feel like my relatives could benfit greatly from the skills I learn.
            Many of my cousins are starting their own businesses so being also to make their websites to support them would make me a good asset to the family.
          </p>    
        </div>
        <div classname="col-md-4">
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
