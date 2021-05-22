import React from 'react';
import { Button } from 'react-bootstrap';
import ListView from './ListView'

class PlusMinus extends React.Component {

  constructor(){
    super();
    this.state ={
      itemName: '',
      items: []
    }
    this.textInput= React.createRef();
  }

  addItems = () =>{
    if(this.state.itemName){
      this.state.items.push(this.state.itemName);
      this.setState({itemName: ''})
      this.textInput.current.focus();
    }
  }

  changeItemText = event => {
    this.setState({itemName: event.target.value})
  }

  removeItem = (index) =>{
    let tempArray = [...this.state.items];
    tempArray.splice(index, 1);
    this.setState({items: tempArray});
  }

  render(){
    return (
      <>
        <div style={{textAlign: "center"}}>
          <div>
            <input autoFocus ref={this.textInput} type="text" value={this.state.itemName} onChange={this.changeItemText}/>
            <Button style={{marginRight: "5px"}} onClick={this.addItems}>Click</Button>
          </div>
          <div>
            <ListView 
              name={this.state.items}
              removeItem={this.removeItem}
            />
          </div>
        </div>
      </>
    )
  }

}

export default PlusMinus;