/**
 * ReactJS components
 */
 
var Clicker = React.createClass({

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
