import { Component } from "react";
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
                                        <li><a href="form.html">Join With Us</a></li>
                                        <li><a href="#">Donet Now</a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
export default MyLandingPage