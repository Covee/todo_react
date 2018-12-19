import React, { Component } from 'react';
import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList/TodoList';


class App extends Component {
    state = {
        input: '',
        todos: [
            { id:0, text: 'studying react', done: true },
            { id:1, text: 'component style', done: false }
        ]
    }
    id = 1
    getId = () => {
        return ++ this.id;
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            input: value
        });
    };
    handleInsert = () => {
        const { todos, input } = this.state;
        const newTodo = {
            text: input,
            done: false,
            id: this.getId()
        }
        this.setState({
            todos: [...todos, newTodo],
            input: ''
        });
    };

    render() {
        const { input, todos } = this.state;
        const {
            handleChange,
            handleInsert
        } = this;
        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
                <TodoList todos={todos} />
            </PageTemplate>
            
        )
    }
}

export default App;