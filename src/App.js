import React from "react";
import { connect } from "react-redux"; //HOC

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { buyItem as addItem, removeFeature as subtractFeature } from "./actions/featureActions";

const App = props => {
//  console.log("I am App props", props)

  const removeFeature = item => {
    console.log("hello", item)
    props.subtractFeature(item)
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addItem(item)

  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.state.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures
        buyItem={buyItem}
          additionalFeatures={props.state.additionalFeatures}
        />
        <Total
          car={props.state.car}
          additionalPrice={props.state.additionalPrice}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, { addItem, subtractFeature })(App);
