import { Component } from "react";
class MyTeam extends Component {
    render() {
        return (
            <section class="bg-04">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="heading">
                                <h2>Meet Our Team</h2>
                            </div>
                        </div>

                        <div class="main-team-card d-flex">
                            <div class="team-setup">
                                <div class="team-items">
                                    <div class="team-user">
                                    <img src={"/images/team/1.jpg"} />
                                    </div>
                                    <div class="team-user-social">
                                        <ol>
                                            <li><i class="fab fa-facebook-f"></i></li>
                                            <li><i class="fab fa-twitter"></i></li>
                                            <li><i class="fab fa-google"></i></li>
                                            <li><i class="fab fa-skype"></i></li>
                                        </ol>
                                    </div>
                                    <div class="team-name">
                                        <h2>JOHN</h2>
                                        <b>Attorneys</b>
                                    </div>
                                </div>
                            </div>

                            <div class="team-setup">
                                <div class="team-items">
                                    <div class="team-user">
                                    <img src={"/images/team/2.jpg"} />
                                    </div>
                                    <div class="team-user-social">
                                        <ol>
                                            <li><i class="fab fa-facebook-f"></i></li>
                                            <li><i class="fab fa-twitter"></i></li>
                                            <li><i class="fab fa-google"></i></li>
                                            <li><i class="fab fa-skype"></i></li>
                                        </ol>
                                    </div>
                                    <div class="team-name">
                                        <h2>TURNER</h2>
                                        <b>Attorneys</b>
                                    </div>
                                </div>
                            </div>

                            <div class="team-setup">
                                <div class="team-items">
                                    <div class="team-user">
                                    <img src={"/images/team/3.jpg"} />
                                    </div>
                                    <div class="team-user-social">
                                        <ol>
                                            <li><i class="fab fa-facebook-f"></i></li>
                                            <li><i class="fab fa-twitter"></i></li>
                                            <li><i class="fab fa-google"></i></li>
                                            <li><i class="fab fa-skype"></i></li>
                                        </ol>
                                    </div>
                                    <div class="team-name">
                                        <h2>GILBERT WILLIAMS</h2>
                                        <b>Attorneys</b>
                                    </div>
                                </div>
                            </div>

                            <div class="team-setup">
                                <div class="team-items">
                                    <div class="team-user">
                                    <img src={"/images/team/1.jpg"} />
                                    </div>
                                    <div class="team-user-social">
                                        <ol>
                                            <li><i class="fab fa-facebook-f"></i></li>
                                            <li><i class="fab fa-twitter"></i></li>
                                            <li><i class="fab fa-google"></i></li>
                                            <li><i class="fab fa-skype"></i></li>
                                        </ol>
                                    </div>
                                    <div class="team-name">
                                        <h2>ANDERSON JHON</h2>
                                        <b>Attorneys</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default MyTeam;