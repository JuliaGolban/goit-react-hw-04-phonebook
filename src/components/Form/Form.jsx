import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import TextBtn from 'components/buttons/TextBtn/TextBtn.styled';
import { Form, Field, Label, Input} from './Form.styled';

const INITIAL_STATE = {
    name: '',
    number:'',
}

export class ContactForm extends Component {
    state = { ...INITIAL_STATE};

    handleChange = e => {
        const { name,  value} = e.currentTarget;
        this.setState({ [name]: value})
        this.createID();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit({ ...this.state });
        this.reset();
    }
        
    createID = () => {
        const contactId = nanoid(4);
        this.setState({ id: contactId })
    }

    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };
    
    render() {
        const { id, name, number } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Field>
                    <Label>Name</Label>
                    <Input
                        type="text"
                        name="name"
                        contactId={id}
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                </Field>
                <Field>
                    <Label>Number</Label>
                    <Input
                        type="tel"
                        name="number"
                        contactId={id}
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                     />
                </Field>
                <TextBtn type="submit">Add contact</TextBtn>
            </Form>
        );
    }
}