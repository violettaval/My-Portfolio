import React from "react";
import Footer from "../Footer";
import "./../Assets/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  content: {
    background: "white",
    padding: "20px",
    margin: "20px",
    marginLeft: "24px"
  }
};

function Contact(props) {
  return (
    <div>
      <div classname="row">
        <br />
      </div>
      <div classname="row">
        <div classname="col-md-8 col-xs-12" style={styles.content}>
          <h2>Contact</h2>
          <hr />
          <div classname="row">
            <div classname="col-sm-10">
              <div classname="form-group">
                <label for="inputName">Name</label>
                <input type="name" classname="form-control" id="inputName" placeholder="Name" />
              </div>
              <div classname="form-group">
                <label for="inputEmail">Email</label>
                <input type="email" classname="form-control" id="inputEmail" placeholder="Email" />
              </div>
              <div classname="form-group">
                <label for="inputMessage">Message</label>
                <input type="message" classname="form-control" id="inputMessage" placeholder="Message" />
              </div>
              <button type="submit" classname="btn btn-info">Submit</button>
            </div>    
            <div classname="col-sm-2"></div>
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

export default Contact;
