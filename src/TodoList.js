import React from 'react'
import { Query } from 'react-apollo'
import fetchTodos from './queries/fetchTodos'

const TodoList = () => (
  <Query
    query={fetchTodos}
  >
      {({ loading, error, data }) => {
        if(loading) return <p>Loading...</p>
        if(error) return <p>Error: Something went wrong.</p>
        console.log("data>>", JSON.stringify(data))
        return data.todos.map(({ id, title, description })=>(
          <div key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))
      }}
  </Query>
)

export default TodoList