// rajib
import { Component } from "react";
class MyLatestNews extends Component {
    render() {
        return (
            <section class="bg-05">
                <div class="container">
                    <div class="col-12">
                        <div class="heading">
                            <h2>Latest News</h2>
                        </div>
                    </div>

                    <div class="blog-main-card d-flex">
                        <article class="blog-sub">
                            <div class="blog-content">
                                <img src={"/images/blog/blog_1.jpg"} />
                            </div>
                            <div class="blog-content-section">
                                <div class="blo-content-title">
                                    <h4>Capitalize on low hanging fruit to identify ballpark</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut
                                        praesentium
                                        facilis ratione! Voluptatibus neque dignissimos ipsa atque veniam sint omnis in blanditiis, nemo fugit
                                        animi assumenda.</p>
                                </div>
                                <div class="blog-admin">
                                    <ol>
                                        <li><i class="fal fa-user-tie"></i> By Admin</li>
                                        <li><i class="fal fa-calendar-alt"></i> july 28, 2020</li>
                                    </ol>
                                </div>
                            </div>
                        </article>

                        <article class="blog-sub">
                            <div class="blog-content">
                                <img src={"/images/blog/blog_2.jpg"} />
                            </div>
                            <div class="blog-content-section">
                                <div class="blo-content-title">
                                    <h4>Capitalize on low hanging fruit to identify ballpark</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut
                                        praesentium
                                        facilis ratione! Voluptatibus neque dignissimos ipsa atque veniam sint omnis in blanditiis, nemo fugit
                                        animi assumenda.</p>
                                </div>
                                <div class="blog-admin">
                                    <ol>
                                        <li><i class="fal fa-user-tie"></i> By Admin</li>
                                        <li><i class="fal fa-calendar-alt"></i> july 28, 2020</li>
                                    </ol>
                                </div>
                            </div>
                        </article>

                        <article class="blog-sub">
                            <div class="blog-content">
                                <img src={"/images/blog/blog_3.jpg"} />
                            </div>
                            <div class="blog-content-section">
                                <div class="blo-content-title">
                                    <h4>Capitalize on low hanging fruit to identify ballpark</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut
                                        praesentium
                                        facilis ratione! Voluptatibus neque dignissimos ipsa atque veniam sint omnis in blanditiis, nemo fugit
                                        animi assumenda.</p>
                                </div>
                                <div class="blog-admin">
                                    <ol>
                                        <li><i class="fal fa-user-tie"></i> By Admin</li>
                                        <li><i class="fal fa-calendar-alt"></i> july 28, 2020</li>
                                    </ol>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

        );
    }
}
export default MyLatestNews
