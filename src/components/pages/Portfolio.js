import React from "react";
import Footer from "../Footer";
import "./../Assets/style.css";
import VV from "./../Assets/Violet Val.pdf";
import P2 from "./../Assets/Images/planeatarium2.PNG";
import A from "./../Assets/Images/Animal.PNG";
import C from "./../Assets/Images/Calendar.PNG";
import C33 from "./../Assets/Images/Capture33.PNG";
import F1 from "./../Assets/Images/Front of Weather API.001.png";
import T from "./../Assets/Images/table.PNG";


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

function Portfolio() {
  return (
    <div>
      <div classname="row">
        <br />
      </div>
      <div classname="row">
        <div classname="col-md-8 col-xs-12" style={styles.content}>
        <h2>Portfolio</h2>
          <hr />
          <div classname="row">
            <div classname="col-md-12">
              <h3>Github: </h3><a href="https://github.com/violettaval">https://github.com/violettaval</a>
              <br />
              <h3>Linkedin: </h3><a href="https://www.linkedin.com/in/violet-valencia-cortes-rios-a318b01b6/">https://www.linkedin.com/in/violet-valencia-cortes-rios-a318b01b6/</a>
              <br />
              <h3>Resume: </h3><a href={VV}>Violet Val.pdf</a>
              <br />
            </div>
          </div>
          <div classname="row">
            <div classname="col-lg-6 col-md-12">
              <img classname="pic" src={P2} alt="aboutPagePic" style={styles.pic}/>
              <h3>Plan-Eat-arium URL: </h3><a href="https://josly025.github.io/plan-eat-rium.io/" target="_blank">https://josly025.github.io/plan-eat-rium.io/</a>
              <h3>Github Link: </h3><a href="https://github.com/Josly025/plan-eat-rium.io.git" target="_blank">https://github.com/Josly025/plan-eat-rium.io.git</a>
            </div>
            <div classname="col-lg-6 col-md-12 righty">
              <img classname="pic" src={A} alt="aboutPagePic" style={styles.pic}/>
              <h3>Animal Crossing Link URL: </h3><a href="https://violettaval.github.io/Animal-Crossing-Quiz-/" target="_blank" >https://violettaval.github.io/Animal-Crossing-Quiz-/</a>
              <h3>Github Link: </h3><a href="https://github.com/violettaval/Animal-Crossing-Quiz-/" target="_blank">https://github.com/violettaval/Animal-Crossing-Quiz-/</a>
            </div>
          </div>
          <div classname="row">
            <div classname="col-lg-6 col-md-12">
              <img classname="pic" src={C} alt="aboutPagePic" style={styles.pic}/>              
              <h3>Calendar Assistant URL: </h3><a href="https://violettaval.github.io/Calendar-Assistant/" target="_blank" >https://violettaval.github.io/Calendar-Assistant/</a>
              <h3>Github Link: </h3><a href="https://github.com/violettaval/Calendar-Assistant/" target="_blank" >https://github.com/violettaval/Calendar-Assistant/</a>
            </div>
            <div classname="col-lg-6 col-md-12 righty">
              <img classname="pic" src={C33} alt="aboutPagePic" style={styles.pic}/>
              <h3>Note Taker URL: </h3><a href="https://note-taker-server.herokuapp.com" target="_blank">https://note-taker-server.herokuapp.com</a>
              <h3>Github Link: </h3><a href="https://github.com/violettaval/Note-Taker-Server" target="_blank">https://github.com/violettaval/Note-Taker-Server</a>
            </div>
          </div>
          <div classname="row">
            <div class="col-lg-6 col-md-12">
              <img classname="pic" src={F1} alt="aboutPagePic" style={styles.pic}/>              
              <h3>Weather Calendar Assistant URL: </h3><a href="https://project-grovyle.herokuapp.com/" target="_blank" >https://project-grovyle.herokuapp.com/</a>
              <h3>Github Link: </h3><a href="https://github.com/Cete4/Project_Grovyle.git" target="_blank" >https://github.com/Cete4/Project_Grovyle.git</a>
            </div>
            <div classname="col-lg-6 col-md-12 righty">
              <img classname="pic" src={T} alt="aboutPagePic" style={styles.pic}/>
              <h3>Table Reservation URL: </h3><a href="https://nameless-woodland-96802.herokuapp.com/" target="_blank">https://nameless-woodland-96802.herokuapp.com/</a>
              <h3>Github Link: </h3><a href="https://github.com/violettaval/Table_Reservation" target="_blank">https://github.com/violettaval/Table_Reservation</a>
            </div>
          </div>    
        </div>
        <div classname="col-md-4">
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
