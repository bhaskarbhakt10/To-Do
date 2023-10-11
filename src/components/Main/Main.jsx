import { useState } from "react";

import check from "./CheckToDoBeforeAdding"
import Delete from "./SubComponents/DeleteBtn";
import Completed from "./SubComponents/Completedbtn";

import './styles/main.css'


function Main() {


    const [InputList, SetInputList] = useState('')

    const [ToDoList, SetToDoList] = useState([])

    const [IsCompleted, SetIsCompleted] = useState([])

    // console.log(ToDoList);
    // console.error(IsCompleted);

    function AddItems(e) {
        const value = e.target.value;
        SetInputList(value);
    }

    const AddToDoList = (e) => {
        // console.log(InputList);
        const PrevData = [...ToDoList];
        const checkData = check(InputList, PrevData);
        if (checkData === true) {
            const NewData = [...PrevData, InputList];
            SetToDoList(NewData);
            const Emptyvalue = "";
            SetInputList(Emptyvalue);

        }
        else {
            alert(checkData);
        }
    }


    const handleDelete = (e, key, element) => {
        const UpdatedList = ToDoList.filter((_, index) => index !== key);
        SetToDoList(UpdatedList);


        const ToDoListChecked = [...IsCompleted];

        const UpdatedAfterDel = ToDoListChecked.filter((todo, index) => { todo !== element })

        SetIsCompleted(UpdatedAfterDel);


    }
    const handleCompleted = (e, key, element) => {

        const IsChecked = e.target.checked;

        const ToDoListChecked = [...IsCompleted];

        ToDoListChecked[element] = IsChecked;

        SetIsCompleted(ToDoListChecked);



    }


    return (
        <>
            <main className="main">
                <div className="heading">
                    <h2>To Do List</h2>
                </div>
                <div className="main-wrapper">
                    <div className="main-todo">
                        <div className="to-do-input">
                            <input type="text" name="todo-item" id="todo-item" placeholder="Add Items" onChange={(e) => AddItems(e)} value={InputList} />
                        </div>
                        <div className="todo-btn">
                            <button className="btn" onClick={(e) => AddToDoList(e)}>Add Item</button>
                        </div>
                    </div>
                    <div className="todo-lists-items">
                        <ul>

                            {ToDoList.length > 0 ? (ToDoList.map((element, key) => {
                                return (
                                    <li key={key}><div><Completed onCompleted={(e) => handleCompleted(e, key, element.replace(/ /g, '-'))} value={element} id={element.replace(/ /g, '-')} /><label htmlFor={element.replace(/ /g, '-')} className={IsCompleted[element] === true ? "strikeout" : ""}>{element}</label> <div className="todo-btn-wrapper"><Delete onDelete={(e) => handleDelete(e, key, element.replace(/ /g, '-'))} /></div></div></li>
                                )
                            })) : (
                                <li> No results found</li>
                            )}
                        </ul>

                    </div>
                </div>
            </main>
        </>
    )
}
export default Main;