// use react & react dom
// ES6 Module loader (importing file or to require files)- React, Angular, Vue 
// import varName from 'packageName' 
//ReactDOM is required only once but,
//Everytime you creating component we require react import in particular file
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))