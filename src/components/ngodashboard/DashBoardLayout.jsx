import React from "react";
import Sidebar from "./Sidebar";
import {Col,Container,Row} from 'react-bootstrap';
import {SignupForm } from "./DetailsUpdate";
import TableFormatData from "./Details";

class Layout extends React.Component{
    render(){
        return(
            <Row>
                <Col md="auto" sm="auto">
                    <Sidebar />
                </Col>
                <Col>
                    <Container> 
                        <TableFormatData />
                    </Container>
                </Col>
            </Row>
           
        );
    }
}

export default Layout;