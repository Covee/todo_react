import React, { Component } from 'react';
import TodoItem from '../TodoItem';


class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoItem done>리액트 공부하기</TodoItem>
                <TodoItem>component styling</TodoItem>
            </div>
        )
    }
}
export default TodoList;