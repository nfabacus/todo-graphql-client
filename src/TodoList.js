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

        return data.rates.map(({ currency, rate }) => (
          <div key={currency}>
            <p>{`${currency}: ${rate}`}</p>
          </div>
        ))
      }}
  </Query>
)

export default TodoList