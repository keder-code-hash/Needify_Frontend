import React from "react";
import Sidebar from "./Sidebar";
import {Col,Container,Row} from 'react-bootstrap'; 
import TableFormatData from "./Details"; 
import { BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
import { SignupForm } from "./DetailsUpdate";
import PrevHistory from "./PrevHistory";

function Layout(){  
        return( 
            <Row>
                <Col md="auto" sm="auto">
                    <Sidebar />
                </Col>
                <Col>
                    <Container> 
 
                        <Switch>
                            <Route path="/ngodash/details"><TableFormatData/> </Route>
                            <Route path="/ngodash/profileupdate"><SignupForm/> </Route> 
                            <Route path="/ngodash/history"><PrevHistory/></Route>
                        </Switch> 
                        
                    </Container>
                </Col>
            </Row>  
        ); 
}

export default Layout;