import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa'


class StudentsList extends Component {

    constructor(props) {
        super(props);
        this.state = {students: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('api/students')
            .then(response => response.json())
            .then(data => this.setState({students: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/api/student/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedStudents = [...this.state.students].filter(i => i.id !== id);
            this.setState({students: updatedStudents});
        });
    }

    render() {
        const {students, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>
        }

        const studentsList = students.map(student => {
            return  <tr className="dark" key={student.id}>
                        <td style={{whiteSpace: 'nowrap'}}>{student.name}</td>
                        <td>{student.album}</td>
                        <td>{student.mail}</td>
                        <ButtonGroup>
                            <Button size="sm" color="primary" tag={Link} to={"/students/" + student.id}>
                                <FaEdit /> Edit
                            </Button>
                            <Button size="sm" color="danger" onClick={() => this.remove(student.id)}>
                                <FaTrashAlt/> Delete
                            </Button>
                        </ButtonGroup>
                    </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/students/new">
                            <FaPlus /> Add Student
                        </Button>
                    </div>
                    <h3>Students List</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Name</th>
                            <th width="20%">Album</th>
                            <th width="20%">Mail</th>
                        </tr>
                        </thead>
                        <tbody>
                        {studentsList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default StudentsList;