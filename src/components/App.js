import React from 'react'
import Footer from './Footer'
import Header from './Header/index'
import AddTodo from '../containers/AddTodo'
import About from './About/index';
import Home from './Home/index';
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({ match: { params } }) => {
  return (
    <div>
      <Header page={params.page || '/'} />
      <Home />
      {/*
      <AddTodo />
      <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
      <Footer />
    */}
    </div>
  )
}

export default App