const React = require('react');

class Clicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count: this.getMin()};
    this.onClick = this.onClick.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  // Angular directive's attrs are strings, so we need to parse them.
  getMin() {
    return parseInt(this.props.min);
  }

  getMax() {
    return parseInt(this.props.max);
  }

  onClick() {
    var count;

    if (this.state.count < this.getMax()) {
      count = this.state.count + 1;
    } else {
      count = this.getMin();
    }
    this.setState({count: count});
  }

  onReset() {
    this.setState({count: this.getMin()});
  }

  render() {
    return (
      /* jshint ignore:start */
      <div>
        <button className="btn btn-default" onClick={this.onClick}>
          click <span className="badge">{this.state.count}</span>
        </button>
        <button className="btn btn-flat btn-danger" onClick={this.onReset}>
          reset
        </button>
      </div>
      /* jshint ignore:end */
    );
  }
}

// The default props will be overridden by the directive's attrs.
Clicker.defaultProps = {
  min: 0,
  max: Number.MAX_SAFE_INTEGER
};

module.exports = Clicker;
