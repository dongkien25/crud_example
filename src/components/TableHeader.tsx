import React, { Component } from 'react'
interface Props {
    titles: string[];
}

interface State {
 
}
export class TableHeader extends Component <Props, State>{
    // constructor(props:Props) {
    //     super(props)
    // }

    render() {
        const titlesHeader = this.props.titles.map((title,i) => <th key={i}>{title}</th>)
        return (
            <tr className="">
                {titlesHeader}
            </tr>
        )
    }
}

export default TableHeader
