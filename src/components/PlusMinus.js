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
  }

  addItems = () =>{
    console.log(this.state)
    if(this.state.itemName){
      this.state.items.push(this.state.itemName);
      this.setState({itemName: ''})
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
        <input type="text" value={this.state.itemName} onChange={this.changeItemText}/>
          <Button style={{marginRight: "5px"}} onClick={this.addItems}>Click</Button>
          <ListView 
            name={this.state.items}
            removeItem={this.removeItem}
          />
        </div>
      </>
    )
  }

}

export default PlusMinus;