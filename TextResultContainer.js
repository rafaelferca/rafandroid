import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import TextResult from './TextResult.js';

const mapStateToProps = state => ({
  theresult: state
})

const mapDispatchToProps = (dispatch) => ({
  showmetime: () => { dispatch({ type: 'SHOWMETIME' }) },
  getgeoinfo: () => { dispatch({ type: 'GETGEOINFO' }) },
  getcarrier: () => { dispatch({ type: 'GETCARRIER' }) },  
  getdevicecountry: () => { dispatch({ type: 'GETDEVICECOUNTRY' }) },
  getapilevel: () => { dispatch({ type: 'GETAPILEVEL' }) }
  
})

export default connect(mapStateToProps, mapDispatchToProps)(TextResult)