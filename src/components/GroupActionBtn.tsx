import { Button } from 'antd'
import React, { Component } from 'react'

export class GroupActionBtn extends Component {
    render() {
        return (
            <div className="group-btn">
                <Button >Detail</Button>
                <Button type='primary'>Edit</Button>
                <Button type='primary' danger>Delete</Button>
            </div>
        )
    }
}

export default GroupActionBtn
