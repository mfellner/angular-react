/**
 * ReactJS components
 */
 
var Clicker = React.createClass({displayName: "Clicker",

  // The default props will be overridden by the directive's attrs.
  getDefaultProps: function () {
    return {
      min: 0,
      max: Number.MAX_SAFE_INTEGER
    };
  },

  getInitialState: function () {
    return {
      count: this.getMin()
    };
  },

  // Angular directive's attrs are strings, so we need to parse them.
  getMin: function () {
    return parseInt(this.props.min);
  },

  getMax: function () {
    return parseInt(this.props.max);
  },

  onClick: function () {
    var count;

    if (this.state.count < this.getMax()) {
      count = this.state.count + 1;
    } else {
      count = this.getMin();
    }
    this.setState({count: count});
  },

  onReset: function () {
    this.setState({count: this.getMin()});
  },

  render: function () {
    return (
      React.createElement("div", {className: "col-md-12"}, 
        React.createElement("button", {className: "btn btn-default", onClick: this.onClick}, 
          "click ", React.createElement("span", {className: "badge"}, this.state.count)
        ), 
        React.createElement("button", {className: "btn btn-flat btn-danger", onClick: this.onReset}, 
          "reset"
        )
      )
    );
  }
});
