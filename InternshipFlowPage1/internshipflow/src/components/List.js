import React from "react";
import PropTypes from "prop-types";


function List(props)
{
  return (
    <div className="List">

    <button onClick={props}> {props.name}</button>

    </div>
  );
}

List.propTypes={
  name: PropTypes.string.isRequired
};

export default List;
