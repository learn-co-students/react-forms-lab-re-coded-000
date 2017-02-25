https://www.facebook.com/yallaiq/videos/696184483897709/


const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

   this.count=(row)=>{return row.split(" ").filter(l => l).length}

  this.validate=function(value){
      const lines=value.split("\n").filter(l => l);
      if(lines.length==3){
        if(this.count(lines[0])==5 && this.count(lines[1])==3 && this.count(lines[2])==5 ){return true;}else{return false}
      }else{return false;}
    }

 this.callBack=this.callBack.bind(this)


this.state = {
      value:"",valid:false
     };
  }

callBack(e){
          const content = e.target.value;

            if (content) {
              this.setState({
                value: content,
                valid: this.validate(content),
              });
            }
            }
  render() {
    return (
      <div>
        <textarea onChange={this.callBack} value={this.state.value} rows="3" cols="60" />
        {!this.state.valid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
