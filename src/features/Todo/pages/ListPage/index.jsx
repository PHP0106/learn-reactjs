import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
;
ListPage.propTypes = {

};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },
    ]

    const location = useLocation();
    const navigate = useNavigate();
    // const { pathname } = useLocation();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all'
    })

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all')
    }, [location.search])

    const handleTodoClick = (todo, idx) => {
        //clone current array to the new one
        const newTodoList = [...todoList];

        //toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }

        //update todo list
        setTodoList(newTodoList);

    }

    const handleShowAllClick = () => {
        // setFilterStatus('all');
        const queryParams = { status: 'all' };
        navigate({
            search: queryString.stringify(queryParams)
        })
    }

    const handleShowCompletedClick = () => {
        // setFilterStatus('completed');
        const queryParams = { status: 'completed' };
        navigate({
            search: queryString.stringify(queryParams)
        })
    }

    const handleShowNewClick = () => {
        // setFilterStatus('new');
        const queryParams = { status: 'new' };
        navigate({
            search: queryString.stringify(queryParams)
        })
    }

    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)
    }, [todoList, filterStatus])

    const handleTodoFormSubmit = (value) => {
        console.log('Form submit: ', value);
    }

    return (
        <div>

            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />

            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;