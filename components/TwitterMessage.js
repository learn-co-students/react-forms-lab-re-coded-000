const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.trackChars=function(){return this.props.maxChars - this.state.value.length}

    this.callBack=this.callBack.bind(this)

    this.state = {
      maxChars:10,
      value:""
     };

  }
  callBack(e){
    this.setState({
      value: e.target.value,
    });
            }

  render() {
    return (
      <div>
        <strong >Your message:</strong>
        <input onChange={this.callBack} value={this.state.value} type="text" />
        <small >{this.trackChars()}></small>
      </div>
    );
  }
}
TwitterMessage.defultProps={
  maxChars: 100
}
TwitterMessage.PropTypes ={
  maxChars: React.PropTypes.number,

}
module.exports = TwitterMessage;
