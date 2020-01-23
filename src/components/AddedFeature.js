import React from 'react';
import { removeFeature } from '../actions/featureActions';

const AddedFeature = props => {
  console.log( props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props.feature)} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
