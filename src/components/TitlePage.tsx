import React, { Component } from 'react'
interface Props {
    titlePage: string;
}
export class TableTitle extends Component <Props>{
    render() {
        const title = this.props.titlePage
        return (
            <h1 style={{ textAlign: "center" }}>{title}</h1>
        )
    }
}

export default TableTitle
