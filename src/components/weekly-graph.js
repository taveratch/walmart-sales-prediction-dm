import React from 'react';
import data from '../js/data';

class WeeklyGraph extends React.Component {

  componentDidMount() {
    data.loadData();
  }

  render = () => {
    return (<div id="weekly-graph"/>)
  }

}

export default WeeklyGraph
