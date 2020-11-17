import React, {useState} from "react";
import { Table } from "react-bootstrap";

function DataTable({ data }) {
  let alerts = data.alerts;
  const [searchInput, setSearchInput] = useState("");
  const heds = [
    "Number",
    "Date",
    "Alert Type",
    "Audit Name",
    "Facility",
    "Dumpster",
    "Status",
    "Notes",
    "Stream",
  ];
  let i = 0;
  return (
    <div className="card">
      <div className="card-body">
        <div className="row search-row">
          <div className="col input-col">
            <label htmlFor="search">Search: </label>
            <input
              type="text"
              onChange={(e) => setSearchInput(e.target.value)}
            ></input>
          </div>
        </div>
        <Table id="data-table" striped bordered hover>
          <thead>
            <tr>
              {" "}
              {heds.map((h) => {
                return <td key={Math.random()}>{h}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {alerts.filter(a=> {
              return (
                a.date.toLowerCase().includes(searchInput.toLowerCase()) ||
                a.alert_type.toLowerCase().includes(searchInput.toLowerCase()) ||
                a.audit_name.toLowerCase().includes(searchInput.toLowerCase()) ||
                a.facility_name.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
                a.dumpster_name.toLowerCase().includes(searchInput.toLowerCase()) ||
                a.status.toLowerCase().includes(searchInput.toLowerCase()) ||
                a.notes.toLowerCase().includes(searchInput.toLowerCase()) ||
                a.stream.toLowerCase().includes(searchInput.toLowerCase())
              )}).map((a) => {
              i++;
              return (
                <tr key={Math.random()}>
                  <td>{i}</td>
                  <td>{a.date}</td>
                  <td>{a.alert_type}</td>
                  <td>{a.audit_name}</td>
                  <td>{a.facility_name}</td>
                  <td>{a.dumpster_name}</td>
                  <td>{a.status}</td>
                  <td>{a.notes !== "" ? a.notes : " "}</td>
                  <td>{a.stream}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DataTable;
