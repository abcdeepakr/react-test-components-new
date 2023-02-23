import React ,{useEffect, useState} from 'react'
import styles from './todo.module.css'
function TodoComponent() {
    
    const[todos, setTodos] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            setTodos(data)
        }).catch(err =>{
            console.log(err)
        })
    },[])

  return (
    <div>
        {todos.length > 0 ? 
        <div className={styles['table-container']}>
            <div className={styles['table-header']}>
                <div className={styles['table-header__cell']}>Id</div>
                <div className={styles['table-header__cell']}>user id</div>
                <div className={styles['table-header__cell']}>title</div>
                <div className={styles['table-header__cell']}>completed</div>
            </div>
            <div className={styles['table-contents']}>
            {todos.map(todo =>{
                    return (
                    <div className={styles['table-cell']} key={todo.id}>
                        <div>{todo.id}</div>
                        <div>{todo.userId}</div>
                        <div>{todo.title}</div>
                        <div><input type="checkbox" checked={todo.completed} /></div>
                    </div>) 
                })}
            </div>
        </div> : "Spinner"}
    </div>
  )
}

export default TodoComponent