import './App.css';
import React from 'react';

//internal imports
import {AppUi} from './AppUi'
import{TodoRutineProvider} from '../TodoContext'

function App() {
  return (
    <TodoRutineProvider>
       <AppUi/>
    </TodoRutineProvider>
  )
}

export default App;
