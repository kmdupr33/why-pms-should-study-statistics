import React from "react";
import { Table } from "idyll-components";

class cohort extends React.PureComponent {
  render() {
    const { feature } = this.props;
    const data = [
      {iteration0: ".25"}
    ];
    const prefix = "iteration with ";
    data[0][prefix + feature] = "-";
    const newItem = {
      iteration0: ".25"
    };
    newItem[prefix + feature] = ".50"
    data.push(newItem)
    return <Table data={data} />;
  }
}

export default cohort;
