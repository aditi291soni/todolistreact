import React, { useState } from 'react';
import './App.css'

const TodoList = () => {

    const [list, setList] = useState("");
    const [item, setItem] = useState([]);
    const addItem = () => {
        if (list) {
            setItem([...item, list])
            console.log("list",list)
            console.log("item",item)
            setList("")
        }
    }
    const deleteItem = (id) => {
        const deleteSingle = item.filter((elem, i) => {
            return i !== id;
        })
        setItem(deleteSingle)
    }

    return <div className='taskcnt'>
        <div className='task'>
        <h2 tabIndex='1'>{item.length} Tasks</h2>
        <ol>
            {
                item.map((elem, i) => {
                    return (
                        <div key={i}>
                        <input type="checkbox" name="" id="" />
                        {elem}
                            <button type="button" onClick={() => deleteItem(i)} className="addbtn" >delete</button>
                        
                        </div>
                    )
                })
            }
        </ol>
            <div className="todocnt">
                <input value={list}
                    onChange={(e) => setList(e.target.value)}
                    type="text" 
                    id="floatingPassword"
                    placeholder="Add Todo..."
                />
                <button type="button" onClick={addItem} className="addbtn">add</button>
            </div>
        </div>
    </div>;
};

export default TodoList;
