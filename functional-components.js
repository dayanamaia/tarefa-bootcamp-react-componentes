import React, { useState, setState, useEffect } from 'react';
import { Form, Button } from 'semantic-react-ui'

const ExampleComponent = (props) => {

    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        email: '',
        name: props.name
    });


    useEffect(() => {

        /* algum fetch de dado que a gente quer rodar somente uma vez
        ....................
        */

    }, []);

    const handleChange = (e) => {
        const { name, value} = e.target;

        setForm((state) => ( {...state, [name]: value } ));
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        /* executa alguma request 
        ....................
        */
    }


    const toggleShowForm = () => setShowForm(!showForm);

    // RENDERS ------------------------------

    const renderForm = ()=> {
        return <Form onSubmit={handleSubmit}>
            <Form.Input name="name" value={form.name} onChange={handleChange} />
            <Form.Input name="email" value={form.email} onChange={handleChange} />
            <Form.Button type="submit">Submit!</Form.Button>
        </Form>
    }

    // RENDER --------------------------------
    return (
        <>
            {showForm ? renderForm()
                : <Fragment>
                    <h3>Hi, {form.name}</h3>
                    <Button onClick={toggleShowForm} >Enter Email Address!</Button>
                </Fragment>
            }
        </>
    )
}

export default ExampleComponent