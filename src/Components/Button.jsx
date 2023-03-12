import React from 'react';
import '../StyleSheets/Button.css';

function Button(props) {

  const IsOperator = (val) => {
    return isNaN(val) && (val !== '.') && (val !== '=');
  }

  return (
    <div
      className={`Button-container ${IsOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.manageClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;