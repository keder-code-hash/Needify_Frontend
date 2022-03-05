import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDonate, faFilter, faHandHoldingUsd } from '@fortawesome/fontawesome-free-solid';


function BackGround(){
    return(
        <section class="bg-01">
            <div class="container">
                <div class="row">
                <div class="col-12">
                    <div class="wrapper">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="content">
                            <ol>
                            <li class="dashed">
                                <FontAwesomeIcon icon={faHandHoldingUsd} size='3x' color="#fd580b"/>
                                <br/>
                                <h3>Make Donetion</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </li>
                            </ol>
                        </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="content">
                            <ol>
                            <li class="dashed">  
                                <FontAwesomeIcon icon={faFilter} size='3x' color="#fd580b"/> 
                                <br/>
                                <h3>Fundrising</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </li>
                            </ol>
                        </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="content">
                            <ol>
                            <li> 
                                <FontAwesomeIcon icon={faDonate} size='3x' color="#fd580b"/> 
                                <br/>
                                <h3>Become A Volunteer</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </li>
                            </ol>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

class MyLandingPage extends Component {
    render() {
        return (
            <main>
                <section class="banner" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/slider/1.jpg'})`
                }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="wrapper">
                                    <h1>YOU CAN HELP WITH THE POOR CHILDREN</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci quasi, blanditiis, quidem
                                        distinctio suscipit sunt ducimus illo veritatis corporis quas! Ipsa obcaecati beatae, aut saepe aliquam
                                        corrupti fugit. Cupiditate.</p>
                                    <ol>
                                        <li><a href="#">Join With Us</a></li>
                                        <li><a href="#">Donet Now</a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <BackGround />
            </main>
        );
    }
}

export default MyLandingPage;