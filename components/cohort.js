import React from "react";
import { Table } from "idyll-components";
import Placeholder from "./placeholder";

class Cohort extends React.PureComponent {
  render() {
    const { feature, shippedFeature } = this.props;
    const data = [{ iteration0: ".25" }];
    const prefix = "iteration with ";
    data[0][prefix + feature] = "-";
    const newItem = {
      iteration0: ".25"
    };
    newItem[prefix + feature] = ".50";
    data.push(newItem);
    if (!shippedFeature)
      return (
        <Placeholder height="105px" placeholderText="Your analytics will appear here" />
      );
    return <Table data={data} />;
  }
}

export default Cohort;
