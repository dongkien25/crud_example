import React, { Component } from "react";
import GroupActionBtn from "../components/GroupActionBtn";
import TableHeader from "../components/TableHeader";
import TitlePage from '../components/TitlePage'
interface Props {}

interface State {}

export class PassengerTable extends Component<Props, State> {
  render() {
    const titlesHeader = ["id", "name", "country", "logo", "action"];

    return (
      <div className="wrap-table">
        <TitlePage titlePage="Passenger Table"></TitlePage>
        <table className="table-data">
          <thead>
            <TableHeader titles={titlesHeader}></TableHeader>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>id</td>
              <td>name</td>
              <td>country</td>
              <td>logo</td>
              <td>
                <GroupActionBtn></GroupActionBtn>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PassengerTable;
