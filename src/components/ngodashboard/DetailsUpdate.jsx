import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, useField } from 'formik';
import * as Yup from 'yup';
import { Form,Button,Table } from 'react-bootstrap';
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
            AadharDets:"XXXX XXXX XXXX XXXX"
        },
        {
            membername:"Ram Singh",
            position:"President",
            AadharDets:"XXXX XXXX XXXX XXXX"
        },
        {
            membername:"Ram Singh",
            position:"President",
            AadharDets:"XXXX XXXX XXXX XXXX"
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

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

const TableElement=()=>{ 
    const TableElem=Object.keys(data.registrationdetails).map((keyName,i)=> 
        <tr key={i}> 
            <td>{keyName}</td>
            <td>
                <MyTextInput 
                    name="RegisteredWith"
                    type="text"
                    placeholder="Jane"
                    values={data.registrationdetails[keyName]}
                />
            </td> 
        </tr>  
    );
    return (
        <tbody>
            {TableElem}
        </tbody>
    )

}

// And now we can use these
const SignupForm = () => {
  return ( 
      <Formik
        initialValues={{
          firstName: 'keder',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <div className='container-fluid'>
            <Form>
                <Table responsive="sm md"> 
                    <tbody>
                        <TableElement />
                    </tbody>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Table>
            </Form>
        </div> 

      </Formik> 
  );
};

const TableData=()=>{
    return(
        <div>
            <Table responsive="sm md">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th> 
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td> 
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td> 
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td> 
                </tr>
                </tbody>
            </Table>
        </div>
    );
}


export { 
    SignupForm
}