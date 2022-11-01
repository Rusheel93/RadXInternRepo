import React from "react";
import List from "./List";
function SortList(props)
{
  return(
    <div>
      {props.list.map(c => <List key={c.id} name={c.name}/>)}
    </div>
  );
}

export default SortList;
