import React, { Component }  from 'react';
import { Formik } from "formik";
import { Input, Button } from 'antd';

const inputBottomMargin = {marginBottom: '5px'};


class AddStudentForm extends Component {
    render () {
        return ( 
                <Formik
                initialValues={{firstName: '', lastName: '', email: '', gender: ''}}
                validate={values => {
                    const errors = {};

                    if(!values.firstName){
                        errors.firstName = 'First Name Required'
                    }
                    if(!values.lastName){
                        errors.lastName = 'Last Name Required'
                    }
                    

                    if (!values.email) {
                    errors.email = 'Email required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if(!values.gender){
                        errors.gender = 'Gender Required'
                    }else if (!['MALE','male','female','FEMALE'].includes(values.gender)){
                        errors.gender = 'Gender must be (MALE, male, female, FEMALE)'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Input
                            style={inputBottomMargin}
                            name="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            placeholder='First name'
                        />
                        {errors.firstName && touched.firstName && errors.firstName}
                        <Input
                            style={inputBottomMargin}
                            name="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            placeholder='Last name'
                        />
                        {errors.lastName && touched.lastName && errors.lastName}
                        <Input
                            style={inputBottomMargin}
                            name="email"
                            type='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder='Email'
                        />
                        {errors.email && touched.email && errors.email}
                        <Input
                            style={inputBottomMargin}
                            name="gender"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.gender}
                            placeholder='gender'
                        />
                        {errors.gender && touched.gender && errors.gender}
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </form>
                )}
                </Formik>
        )

    }
}

export default AddStudentForm;