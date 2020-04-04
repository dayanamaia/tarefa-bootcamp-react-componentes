import React, { useState, setState, useEffect } from 'react';
import { Form, Button } from 'semantic-react-ui'

const ExampleComponent = (props) => {

    const [showForm, setShowForm] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState(props.name);


    useEffect(() => {

        /* algum fetch de dado que a gente quer rodar somente uma vez
        ....................
        */
       
    }, []);

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        /* executa alguma request 
        ....................
        */
    }


    toggleShowForm = (e) => {

        this.setState({
            showForm: !this.state.showForm,
        })
    }

    // RENDERS ------------------------------

    renderForm() {
        return <Form onSubmit={this.handleSubmit}>
            <Form.Input name="name" value={this.state.name} onChange={this.handleFormChange} />
            <Form.Input name="email" value={this.state.email} onChange={this.handleFormChange} />
            <Form.Button type="submit">Submit!</Form.Button>
        </Form>
    }

    // RENDER --------------------------------
    render() {

        return (
            <div >
                {this.state.showForm ? this.renderForm()
                    : <Fragment>
                        <h3>Hi, {this.state.name}</h3>
                        <Button onClick={this.toggleShowForm} >Enter Email Address!</Button>
                    </Fragment>
                }
            </div>
        )
    }
}

export default ExampleComponent