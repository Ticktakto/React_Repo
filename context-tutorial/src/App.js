import React from 'react';
import ColorBox from './components/colorBox';
import ColorContext from './contexts/color';

const App = () => {
  return(
   <ColorContext.Provider value={{ color: 'red'}}>
     <div>
       <ColorBox />
     </div>
   </ColorContext.Provider>
  );
}
export default App;
