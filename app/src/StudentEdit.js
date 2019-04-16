import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class StudentEdit extends Component {
    emptyItem = {
        name: '',
        album: '',
        mail: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const student = await (await fetch(`/api/student/${this.props.match.params.id}`)).json();
            this.setState({item: student});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/api/student', {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/students');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Student' : 'Add Student'}</h2>;

        return (
            <div>
                <AppNavbar />
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" value={item.name || ''}
                                onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="album">Album</Label>
                            <Input type="text" name="album" id="album" value={item.album || ''}
                                   onChange={this.handleChange} autoComplete="album"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">Mail</Label>
                            <Input type="text" name="mail" id="mail" value={item.mail || ''}
                                   onChange={this.handleChange} autoComplete="mail"/>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/students">Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default withRouter(StudentEdit)