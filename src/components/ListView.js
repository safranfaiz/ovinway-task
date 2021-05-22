import React from 'react';
import { Button } from 'react-bootstrap';

function ListView(props) {

  const names = props.name;
  const listItems = names.map((name, index) =>
    <li>
      <h5>{`${index+1}. `} {name} <Button onClick={()=>{props.removeItem(index)}}>X</Button> </h5>
    </li>
  );

  return (
    <ul style={{listStyle:"none"}}>{listItems}</ul>
  );

}

export default ListView;