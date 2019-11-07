import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { increment,decrement } from '../actions/numbers';
import Link from 'next/link';
const Counter = ({numbers, inc, dec,}) => {
    const increment = () => {
        inc()
    }
    const decrement = () => {
        dec()
    }
    return (
        <div>
            <button type="button" onClick={increment}>+1</button>
            <h1>{numbers.number}</h1>
            <button type="button"onClick={decrement}>-1</button>
            <Link href='/other' as="/other">Go To Other Page </Link>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      inc: bindActionCreators(increment, dispatch),
      dec: bindActionCreators(decrement, dispatch), 
    }
  }

export default connect(state => state,mapDispatchToProps)(Counter);