import React from 'react';

export function Loader(props) {
  return (
    <div className={ 'loader' + (props.visible ? ' visible' : '') }>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
}
