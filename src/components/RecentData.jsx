// keder
import { Component } from "react";

const data=[{
    "title":"First charity activity of this summer.",
    "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint vero dignissimos hic blanditiis neque. Distinctio dolorem eveniet nesciunt ipsum"
}]

function RecentDatas(){
    return(
        <section className="bg-02">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="heading">
                    <h2>Recent Causes</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        It has survived not only five centuries.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="wrapper">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/causes/1.jpg'} />
                    </figure>
                    <div className="bs">
                        <h3>First charity activity of this summer.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint vero 
                        dignissimos hic blanditiis neque. Distinctio dolorem eveniet nesciunt ipsum 
                        </p>
                        <ol>
                            <li><i className="fal fa-signal"></i>Goal: $450000</li>
                            <li><i className="fal fa-thumbs-up"></i>Raised: $55000</li>
                        </ol>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="wrapper">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/causes/2.jpg'} />
                    </figure>
                    <div className="bs">
                        <h3>Building clean-water system for rural poor.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint vero
                        dignissimos hic blanditiis neque. Distinctio dolorem eveniet nesciunt ipsum
                        </p>
                        <ol>
                        <li><i className="fal fa-signal"></i>Goal: $450000</li>
                        <li><i className="fal fa-thumbs-up"></i>Raised: $55000</li>
                        </ol>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="wrapper">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/causes/3.jpg'} />
                    </figure>
                    <div className="bs">
                        <h3>Big charity: build school for poor children.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint vero
                        dignissimos hic blanditiis neque. Distinctio dolorem eveniet nesciunt ipsum
                        </p>
                        <ol>
                        <li><i className="fal fa-signal"></i>Goal: $450000</li>
                        <li><i className="fal fa-thumbs-up"></i>Raised: $55000</li>
                        </ol>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="wrapper">
                    <figure>
                        <img  src={process.env.PUBLIC_URL + '/causes/1.jpg'}/>
                    </figure>
                    <div className="bs">
                        <h3>First charity activity of this summer.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint vero
                        dignissimos hic blanditiis neque. Distinctio dolorem eveniet nesciunt ipsum
                        </p>
                        <ol>
                        <li><i className="fal fa-signal"></i>Goal: $450000</li>
                        <li><i className="fal fa-thumbs-up"></i>Raised: $55000</li>
                        </ol>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
}

export default RecentDatas;