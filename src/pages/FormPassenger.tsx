import React, { Component } from 'react'
import TitlePage from '../components/TitlePage'

export class FormPassenger extends Component {
    render() {
        return (
            <div className="wrap-form">
                <TitlePage titlePage="Create new Passenger"></TitlePage>
            </div>
        )
    }
}

export default FormPassenger
