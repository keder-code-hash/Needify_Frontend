// keder 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal,faThumbsUp } from '@fortawesome/fontawesome-free-solid';

const data=[{
    id:1,
    title:"First charity activity of this summer.",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint vero dignissimos hic blanditiis neque. Distinctio dolorem eveniet nesciunt ipsum",
    goal:12345,
    raised:2134,
    image:"1.jpg"
},
{
    id:2,
    title:"First charity activity of this summer.",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint vero dignissimos hic blanditiis neque. Distinctio dolorem eveniet nesciunt ipsum",
    goal:12345,
    raised:2134,
    image:"1.jpg"
},
{
    id:3,
    title:"First charity activity of this summer.",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint vero dignissimos hic blanditiis neque. Distinctio dolorem eveniet nesciunt ipsum",
    goal:12345,
    raised:2134,
    image:"1.jpg"
},
{
    id:4,
    title:"First charity activity of this summer.",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint vero dignissimos hic blanditiis neque. Distinctio dolorem eveniet nesciunt ipsum",
    goal:12345,
    raised:2134,
    image:"1.jpg"
}
]

function RecentDetailsCard(props){
    const cardDiv=props.details.map((d)=>
        <div key={d.id} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="wrapper">
                <figure>
                    <img src={process.env.PUBLIC_URL + '/causes/' + d.image} />
                </figure>
                <div className="bs">
                    <h3>{d.title}</h3>
                    <p> {d.text} </p>
                    <ol>
                        <li><FontAwesomeIcon icon={faSignal} size='1x' style={ {color:"#FFA500"} }/>Goal: ${d.goal}</li>
                        <br/>
                        <li><FontAwesomeIcon icon={faThumbsUp} size='1x' style={ {color:"#FFA500"} }/>Raised: ${d.raised}</li>
                    </ol>
                </div>
            </div>
        </div>
    ); 
    return(
        <div className="row">
            {cardDiv}
        </div>
    );
}


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
                </div>
                <RecentDetailsCard details={data} />   
            </div>
        </section>
    );
}

export default RecentDatas;