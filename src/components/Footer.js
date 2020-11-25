import React from "react";
import "./Assets/style.css";

const styles = {
    footer: {
        margin: 0,
        width: "100%"
    },
    blueLine: {
        backgroundColor: "teal",
        height: 8
    },
    greyLine: {
        height: 36,
        backgroundColor: "rgb(61, 61, 61)"
    }
  };


function Footer() {
    return (
        <>
        <footer>
            <div classname="row" style={styles.blueLine} data-spy="affix" data-offset-bottom="36">
                <br />
            </div>
            <div classname="row" style={styles.greyLine} data-spy="affix" data-offset-bottom="0">
                <br /> 
            </div>
        </footer>
        </>
    );
}
export default Footer