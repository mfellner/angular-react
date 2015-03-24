var Clicker = React.createClass({
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
      <div className="col-md-12">
        <button className="btn btn-default" onClick={this.onClick}>
          click <span className="badge">{this.state.count}</span>
        </button>
        <button className="btn btn-flat btn-danger" onClick={this.onReset}>
          reset
        </button>
      </div>
    );
  }
});

// React.render(
//   <Clicker/>,
//   document.getElementById('ng-react')
// );
