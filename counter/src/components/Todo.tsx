import * as React from 'react'
import {
  addTodo as todoCreater,
  delTodo as todoDeleter,
  todoType,
  toggleTodoStatus,
  visibilityType,
  visibilityFilter,
} from '../actions'
import { connect } from 'react-redux'

interface TodoListInterface {
  addTodo?: any,
  delTodo?: any,
  todos?: any,
  toggleTodo?: any,
}

class InputTodo extends React.Component {
  public props: {
    addTodo: any,
  }

  public state = {
    todo: '',
  }

  public handleTodoChange(e: any) {
    const todo = e.target.value
    this.setState(() => {
      return {
        todo,
      }
    })
  }

  public handleAddTodo() {
    const addTodo = this.props.addTodo
    const { todo } = this.state

    if (this.state.todo) {
      addTodo(todo)
      this.setState((prevState, props) => {
        return {
          todo: '',
        }
      })
    }
  }

  public render() {
    return (
      <div>
        <input type="text" value={this.state.todo} onChange={(e) => {this.handleTodoChange(e)}} />
        <button onClick={() => {this.handleAddTodo()}}>Add</button>
      </div>
    )
  }
}

function Todo({todo, delTodo, toggleTodo}: any) {
  const { message, id, type } = todo

  return (
    <div>
      <input type="checkbox" onClick={() => {toggleTodo(id, type)}} checked={todoType.todo_done === type} />
      <span>{message}</span>
      <button onClick={() => delTodo(id)}>x</button>
    </div>
  )
}

function TodoList({todos, delTodo, toggleTodo}: TodoListInterface) {
  const todo_items = todos.map(
    (todo: any, index: number) => <Todo
      key={`todo${index}`}
      todo={todo}
      toggleTodo={toggleTodo}
      delTodo={delTodo} />,
    )
  return (
    <ul>
      {todo_items}
    </ul>
  )
}

function TypeFilter() {
  return (
    <div>
      <a href="javascript:;">全部</a>
      <a href="javascript:;">已完成</a>
      <a href="javascript:;">未完成</a>
    </div>
  )
}

function TodoContainer({
  addTodo,
  delTodo,
  todos,
  toggleTodo,
}: TodoListInterface) {
  return (
    <div className="todos">
      <h1>Todo List</h1>
      <TypeFilter />
      <InputTodo addTodo={addTodo} />
      <TodoList toggleTodo={toggleTodo} todos={todos} delTodo={delTodo} />
    </div>
  )
}

const mapState = (state: any) => {
  return {
    todos: state.todoList.todos,
  }
}
const mapDispatch = (dispatch: any) => {
  return {
    addTodo: (todo: string) => {
      dispatch(todoCreater(todo))
    },
    delTodo: (id: number = -1) => {
      dispatch(todoDeleter(id))
    },
    toggleTodo: (id: number, type: number) => {
      if (type === todoType.todo_undo) {
        dispatch(toggleTodoStatus(todoType[todoType.todo_done], id))
      } else {
        dispatch(toggleTodoStatus(todoType[todoType.todo_undo], id))
      }
    },
  }
}

export default connect(mapState, mapDispatch)(TodoContainer)
