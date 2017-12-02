import React from 'react';

export function Loader(props) {
  return (
    <div className={props.visible ? 'loader visible' : 'loader'}>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
}
