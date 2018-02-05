import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import About from './About/index';
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({ match: { params } }) => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
      <Footer />
    </div>
  )
}

export default App