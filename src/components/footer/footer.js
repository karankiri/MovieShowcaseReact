import React, { Component } from "react";

class Footer extends Component {
  state = {
    value: "this was created without using create-react-app"
  };
  render() {
    return (
        <footer>
            <div className="copyRightContainer">
                <div><span>PRIVACY POLICY</span> |  <span>TERMS & CONDITIONS</span></div>
                <div>2019 &copy; Lorem ipsum. All rights reserved</div>
            </div>
            <div className="socialMediaLinks">
                <div>Follow us on social media</div>
                <div>
                    <a href="https://www.facebook.com" target="_blank"><img src="https://img.icons8.com/color/48/000000/facebook-circled.png"/></a>
                    <a href="https://www.twitter.com" target="_blank"><img src="https://img.icons8.com/color/48/000000/twitter-circled.png"/></a>
                    <a href="https://www.linkedin.com" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin-circled.png"/></a>
                </div>
            </div>
      </footer>
    );
  }
}
export default Footer;