import React from "react";
import { Form,Button,Table,Alert } from 'react-bootstrap';
const data={ 
    id : "XXXXX/XXXX/XXXXX",
    contact : {
        Address:"	C/O STATE OLYMPIC ASSOCIATION NETAJI STADIUM PORT BLAIR",
        City:"	PORT BLAIR",
        State:"	ANDAMAN & NICOBAR ISLANDS",
        Telephone:"	Not Available",
        MobileNo:"	8900946370",
        WebsiteUrl:"	Not Available",
        Email:"	sasipoly744(at)gmail[dot]com",
    },
    memberdetails : [
        {
            membername:"Ram Singh",
            position:"President",
            AadharId:"XXXX XXXX XXXX XXXX"
        },
        {
            membername:"Ram Singh",
            position:"President",
            AadharId:"XXXX XXXX XXXX XXXX"
        },
        {
            membername:"Ram Singh",
            position:"President",
            AadharId:"XXXX XXXX XXXX XXXX"
        }
    ],
    registrationdetails: {
        RegisteredWith:"Registrarof Societies",
        TypeofNGO:"Registered Societies (Non-Government)",
        RegistrationNo:"1544",
        CopyofRegistrationCertificate:"Available",
        CopyofPanCard:"	Available",
        Actname:"SR ACT 1860",
        CityofRegistration:"PORT BLAIR",
        StateofRegistration:"ANDAMAN & NICOBAR ISLANDS",
        DateofRegistration:"26-12-2016",
    },
    achievements:[{
        name:"Prize",
        date:"12/23/2003"
    },{
        name:"Prize",
        date:"12/23/2003"
    }]
}

const TableAchieveElement=()=>{
    const tableElem=data.achievements.map((d)=>  
        <tr> 
            <td>
                <h5>
                    {d['name']}
                </h5>  
            </td> 
            <td>
                <h5>
                    {d['date']}
                </h5>  
            </td>  
        </tr>  
    );
return (
    <tbody>
        {tableElem}
    </tbody>
)
}

const TableMemberElement=()=>{ 
    const TableElem=data.memberdetails.map((d)=>  
        <tr> 
            <td>
                <h5>
                    {d['membername']}
                </h5>  
            </td> 
            <td>
                <h5>
                    {d['position']}
                </h5>  
            </td> 
            <td>
                <h5>
                    {d['AadharId']}
                </h5>  
            </td> 
        </tr> 
          
    );
    return (
        <tbody>
            {TableElem}
        </tbody>
    )

}
const TableFormatData=()=>{
    return(
        <div className='container-fluid' > 
            <div className="row pt-5" >
                <div className="col-10"> 
                        <Table striped bordered hover size="sm">
                            <tbody>
                                <tr> 
                                    <td>
                                        <h5>
                                            Unique NGO ID
                                        </h5>
                                    </td>
                                    <td>
                                        <h5>
                                            {data.id}
                                        </h5>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>                                                                             
                </div>
            </div>
            <div className="row pt-5" >
                <div className="col-10">
                    <Alert variant="success">
                        <Alert.Heading>Registration Details</Alert.Heading>
                    </Alert>
                    <Table striped bordered hover size="sm">
                        <tbody>
                            <tr> 
                                <td>
                                    <h5>
                                        Type of NGO
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.registrationdetails.TypeofNGO}
                                    </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        Registered With
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.registrationdetails.RegisteredWith}
                                    </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        Registration No
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.registrationdetails.RegistrationNo}
                                </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        Copy of Registration Certificate
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.registrationdetails.CopyofRegistrationCertificate}
                                </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        Copy of Pan Card
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.registrationdetails.CopyofPanCard}
                                </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        Act name
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.registrationdetails.Actname}
                                </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        City of Registration
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.registrationdetails.CityofRegistration}
                                </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        State of Registration
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.registrationdetails.StateofRegistration}
                                </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        Date of Registration
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.registrationdetails.DateofRegistration}
                                </h5>
                                </td>
                            </tr> 
                        </tbody>
                    </Table>                                                                             
                </div>
            </div>
            <div className="row pt-5" >
                <div className="col-10">
                    <Alert variant="success">
                        <Alert.Heading>Contact Details</Alert.Heading>
                    </Alert>
                    <Table striped bordered hover size="sm">
                        <tbody>
                            <tr> 
                                <td>
                                    <h5>
                                        Address
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.contact.Address}
                                    </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        City
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.contact.City}
                                    </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        State
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.contact.State}
                                </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        Telephone
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.contact.Telephone}
                                </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        Mobile No
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.contact.MobileNo}
                                </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        Website Url
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.contact.WebsiteUrl}
                                </h5>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                    <h5>
                                        Email
                                    </h5>
                                </td>
                                <td>
                                    <h5>
                                        {data.contact.Email}
                                </h5>
                                </td>
                            </tr>
                        </tbody>
                    </Table>                                                                             
                </div>
            </div>
            <div className="row pt-5" >
                <div className="col-10">
                    <Alert variant="success">
                        <Alert.Heading>Member Details</Alert.Heading>
                    </Alert>
                    <Table striped bordered hover size="sm"> 
                        <thead>
                            <tr> 
                                <th>Member Name</th>
                                <th>Position</th>
                                <th>Aadhar Id</th>
                            </tr>
                        </thead>
                        <TableMemberElement/> 
                    </Table>                                                                             
                </div>
            </div>
            <div className="row pt-5" >
                <div className="col-10">
                    <Alert variant="success">
                        <Alert.Heading>NGO Achievement</Alert.Heading>
                    </Alert>
                    <Table striped bordered hover size="sm"> 
                        <thead>
                            <tr> 
                                <th>Achievement Name</th>
                                <th>Achievement Date</th> 
                            </tr>
                        </thead>
                        <TableAchieveElement/> 
                    </Table>                                                                             
                </div>
            </div>
        </div>
    );
}

export default TableFormatData