import React, { Component } from 'react';
import './Register.css'
export class Register extends Component {

    render() {
        return (
            <>
                <form name="f1">
                    <fieldset>
                        <legend>Registration Page</legend>
                        <table>
                            <tr>
                                <td>
                                    Student ID 
                        </td>
                                <td>
                                    <input type="text" id="sid" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                                <td>
                                    &nbsp;
                        </td>
                            </tr>
                            <tr>
                                <td>
                                   Student Name
                        </td>
                                <td>
                                    <input type="text" id="sname" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                                <td>
                                    &nbsp;
                        </td>
                            </tr>
                            <tr>
                                <td>
                                    Grade
                        </td>
                                <td>
                                    <input type="text" id="grade" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                                <td>
                                    &nbsp;
                        </td>
                            </tr>
                            <tr>
                                <td>
                                    Contact No
                        </td>
                                <td>
                                    <input type="text" id="cno" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                                <td>
                                    &nbsp;
                        </td>
                            </tr>
                            <tr>
                                <td>
                                    Email
                        </td>
                                <td>
                                    <input type="email" id="email" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                                <td>
                                    &nbsp;
                        </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <button >Register</button>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <label id="lbl"></label>
                                </td>
                            </tr>
                        </table>
                    </fieldset>
                </form>
            </>
        );
    }
}
