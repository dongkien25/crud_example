import { Table } from "antd";
import React, { Component } from "react";
import TitlePage from "../components/TitlePage";

export class AirlineTable extends Component {
  render() {
    const cols = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
        // render: (text: string) => <a>{text}</a>,
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        // render: (text: string) => <a>{text}</a>,
      },
      { title: "Country", dataIndex: "country", key: "country" },
      { title: "Logo", dataIndex: "logo", key: "logo" },
      { title: "Action", key:'action' },
    ];
    return (
      <div>
        <TitlePage titlePage="Airline Table"></TitlePage>
        <Table columns={cols} className="table-data"></Table>
      </div>
    );
  }
}

export default AirlineTable;
