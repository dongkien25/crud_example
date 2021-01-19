import { Modal,Button } from 'antd'
import React, { Component } from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export class GroupActionBtn extends Component {
   
   showDeleteConfirm = () =>  {
    confirm({
        title: 'Are you sure delete this?',
        icon: <ExclamationCircleOutlined />,
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
   }
    render() {
        return (
            <div className="group-btn">
                <Button >Detail</Button>
                <Button type='primary'>Edit</Button>
                <Button type='primary' danger onClick={this.showDeleteConfirm}>Delete</Button>
            </div>
        )
    }
}

export default GroupActionBtn
