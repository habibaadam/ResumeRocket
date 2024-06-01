import React from 'react';
import './manual.css';


export default function Columlayout() {
  return (
    <div className="contain">
      <div className="row h-100">
        <div className="col-md-3 h-100 bg-red-600">
          test
          test
          test
          test
        </div>
        <div className="col-md-3 h-100 bg-white">
          test
          test
          test
          test
        </div>
        <div className="col-md-3 h-100 bg-slate-600" >
          test
          test
          test
          test
        </div>
        <div className="col-md-3 h-100 bg-yellow-400">
          test
          test
          test
          test
        </div>
      </div>
    </div>
  );
}