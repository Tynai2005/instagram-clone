import React from 'react';
import { createStore } from 'redux';

const store = createStore(reducer)

function reducer(state = defaultState, action) {
   switch (action.type) {
      case 'ACTION1':
         return { ...state }
         break
      case 'ACTION2':
         return { ...state }
         break
      default:
         return  state
   }
}



const MainContext = () => {
   return (
      <div>
         
      </div>
   );
};

export default MainContext;