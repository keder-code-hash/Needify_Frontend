import React from "react";
import Sidebar from "./Sidebar";
import {Col,Container,Row} from 'react-bootstrap'; 
import DetailsData from "./Details";
import { Routes, Route } from "react-router-dom";
import EventsDetails from "./Events"

class Layout extends React.Component{
    render(){
        return(
            <Row>
                <Col md="auto" sm="auto">
                    <Sidebar />
                </Col>
                <Col>
                    <Container>  
                    
                        <switch>
                            <Routes>
                                <Route exact path="/ngodash">
                                    <DetailsData />    
                                </Route>
                                <Route path="/ngodash/events">
                                    <EventsDetails/>
                                </Route> 
                            </Routes>
                        </switch>

                    </Container>
                </Col>
            </Row>
           
        );
    }
}

export default Layout;