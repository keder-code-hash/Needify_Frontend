import React from "react";
import Sidebar from "./Sidebar";
import {Col,Container,Row} from 'react-bootstrap'; 
import TableFormatData from "./Details"; 
import { BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
import {DetailsUpdate,NestedList} from './DetailsUpdate';
import PrevHistory from "./PrevHistory";
import RequirementsElem from "./Requirements";
import RecipeReviewCard from "./Events";

function Layout(){  
        return( 
            <div>
                <Row>
                    <div className="col-3" style={{ "padding": "0px", "margin" : "0px" }}>
                        <Sidebar />
                    </div>
                    <div className="col-9" style={{ "padding": "0px", "margin" : "0px" }}>
                        <Container> 
    
                            <Switch>
                                <Route path="/ngodash/details"><TableFormatData/> </Route>
                                <Route path="/ngodash/profileupdate"><NestedList/> </Route> 
                                <Route path="/ngodash/history"><PrevHistory/></Route>
                                <Route path="/ngodash/requirements"><RequirementsElem/></Route>
                                <Route path ="/ngodash/events"><RecipeReviewCard/></Route>
                            </Switch> 
                            
                        </Container>
                    </div>
                </Row>  
            </div>
        ); 
}

export default Layout;