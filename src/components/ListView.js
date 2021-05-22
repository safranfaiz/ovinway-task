import React from 'react';
import { Button } from 'react-bootstrap';

function ListView(props) {

  const names = props.name;
  const listItems = names.map((name, index) =>
    <div>
      <h3>{name} <Button onClick={()=>{props.removeItem(index)}}>X</Button> </h3>
    </div>
  );

  return (
    <div>{listItems}</div>
  );

}

export default ListView;