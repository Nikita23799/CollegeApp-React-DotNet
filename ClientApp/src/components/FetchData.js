import React, { Component } from 'react';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = { details: [], loading: true };
    }

    componentDidMount() {
        this.populateStudentData();
    }

    static renderdetailsTable(details) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>ContactNo</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map(detail =>
                        <tr key={detail.StudId}>
                            <td>{detail.StudId}</td>
                            <td>{detail.StudName}</td>
                            <td>{detail.Grade}</td>
                            <td>{detail.ContactNo}</td>
                            <td>{detail.Email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderdetailsTable(this.state.details);

        return (
            <div>
                <h1 id="tabelLabel" >Student Details</h1>

                {contents}
            </div>
        );
    }

    async populateStudentData() {
        const response = await fetch('https://localhost:44313/StudentDetails');
        const data = await response.json();
        console.log(data);
        this.setState({ details: data, loading: false });
    }
}
