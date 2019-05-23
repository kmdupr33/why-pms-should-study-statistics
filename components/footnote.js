import React from "react";

class Footnote extends React.PureComponent {
  render() {
    return (
      <sup style={{ fontSize: "10px", lineHeight: 0 }}>
        {this.props.number || this.props.children[0]}
      </sup>
    );
  }
}

export default Footnote;
