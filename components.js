var Clicker = React.createClass({displayName: "Clicker",
  getInitialState: function () {
    return {
      count: 0
    };
  },

  onClick: function () {
    this.setState({count: this.state.count + 1});
  },

  onReset: function () {
    this.setState({count: 0});
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

// React.render(
//   <Clicker/>,
//   document.getElementById('ng-react')
// );
