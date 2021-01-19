import React, { Component } from "react";
import { connect } from "react-redux";
import GroupActionBtn from "../components/GroupActionBtn";
import TableHeader from "../components/TableHeader";
import TitlePage from "../components/TitlePage";
import { Airline } from "../models/AirlineModel";
import { fetchAirline } from "../store/actions";
import { RootState } from "../store/store";
interface Props {
  data: [];
  // isFetching: boolean;
  fetchData: () => void;
}
interface State {}

const titlesHeader = ["id", "name", "country", "logo", "action"];
export class AirlineTable extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchData();
  }
  airlines = this.props.data;
  rows = this.airlines.map((airline: Airline,i) => {
    return (
      <tr key={i}>
        <td>{airline.id}</td>
        <td>{airline.name}</td>
        <td>{airline.country}</td>
        <td>
          <img className="img-logo" src={airline.logo}></img>
        </td>
        <td>
          <GroupActionBtn></GroupActionBtn>
        </td>
      </tr>
    );
  });
  render() {
    return (
      <div className="wrap-table">
        <TitlePage titlePage="Airline Table"></TitlePage>
        <table className="table-data">
          <thead>
            <TableHeader titles={titlesHeader}></TableHeader>
          </thead>
          <tbody className="table-body">
           {this.rows}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapState(state: RootState) {
  const { 
    appData : {data},
  } = state;
  return {
    data
  };
}

function mapDispatch(dispatch: any) {
  return {
    fetchData: () => dispatch(fetchAirline()),
  };
}

export default connect(mapState, mapDispatch)(AirlineTable);
