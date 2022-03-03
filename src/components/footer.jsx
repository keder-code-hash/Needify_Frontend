import { Component } from "react";

class MyFooter extends Component{
    render(){
        return (
            <footer>
                <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div class="footer-content">
                        <h2>SMART CHARITABLES</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime adipisci veniam
                        voluptatum voluptatem sed ex error beatae, asperiores dignissimos?</p>
                        <ul>
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-google"></i></li>
                        <li><i class="fab fa-skype"></i></li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div class="footer-content">
                        <h2>Quick Links</h2>
                        <ol>
                        <li><a href="#"><i class="fal fa-angle-double-right"></i>Home</a></li>
                        <li><a href="#"><i class="fal fa-angle-double-right"></i>About Us</a></li>
                        <li><a href="#"><i class="fal fa-angle-double-right"></i>Services</a></li>
                        <li><a href="#"><i class="fal fa-angle-double-right"></i>Blog</a></li>
                        <li><a href="#"><i class="fal fa-angle-double-right"></i>Contact Us</a></li>
                        </ol>
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div class="footer-content">
                        <h2>Services</h2>
                        <ol>
                        <li><a href="#"><i class="fal fa-angle-double-right"></i>Home</a></li>
                        <li><a href="#"><i class="fal fa-angle-double-right"></i>About Us</a></li>
                        <li><a href="#"><i class="fal fa-angle-double-right"></i>Services</a></li>
                        <li><a href="#"><i class="fal fa-angle-double-right"></i>Blog</a></li>
                        <li><a href="#"><i class="fal fa-angle-double-right"></i>Contact Us</a></li>
                        </ol>
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div class="footer-content">
                        <h2>News Letters</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <div class="form-group">
                        <input class="form-control" role="" name="email" type="email" placeholder="Enter Your Email" />
                        <i class="fal fa-paper-plane"></i>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="copy-right">
                <div class="container">
                    <div class="copy-right-card">
                    <p>2015 @ All Rights Reserved Designed and developed by<a
                        href="https://www.smarteyeapps.com">SmarteyeTechnologies</a></p>
                    </div>
                </div>
                </div>
            </footer>
        );
    }
}

export default MyFooter