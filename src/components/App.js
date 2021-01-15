import React from 'react';
import { connect } from 'react-redux';
import { addItems } from '../actions';

const App = ({ qty, dispatch }) => {
    let input, item;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.value.trim()) { return }
        item = {
            text: input.value
        }
        dispatch(addItems(item));
        input.value = '';
    };

    return (
        <div className={'wrapper'}>
            <h1>TaskManger</h1>
 
            <form onSubmit={handleSubmit} >
                <div className={'div-wrapper'}>
                    
                    <input type="text" name="name" ref={node => (input = node)} />
                </div>
             
          
            </form>
        </div>
    )
}

export default connect()(App)