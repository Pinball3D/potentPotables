import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var socket = io('http://localhost:3000');

class ClueView extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentDidUpdate(){
    console.log('calling will receive props', this.props.activeClue);
      this.context.router.push('/gameboard');
  }

  render() {
    return(
      <ReactCSSTransitionGroup transitionName="questionPop" transitionAppear={true} transitionAppearTimeout={2000}>
        <div id="question">
          <div id="question-text">
            {this.props.activeClue.question}
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

function mapStateToProps(state){
  return {activeClue: state.gameplay.activeClue};
}

export default connect(mapStateToProps)(ClueView);