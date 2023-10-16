import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import { useState } from "react";



import check from "./CheckToDoBeforeAdding"
import Delete from "./SubComponents/DeleteBtn";
import Completed from "./SubComponents/Completedbtn";

import './styles/main.css'


function Main(props) {

    const {deleletIcon, addIcon} = props;

    const [InputList, SetInputList] = useState('')

    const [ToDoList, SetToDoList] = useState([])

    const [IsCompleted, SetIsCompleted] = useState([])

    const [ItemCount , SetItemCount] = useState({limit:10, currentCount:0});

    // console.log(ToDoList);
    console.error(ItemCount);

    function AddItems(e) {
        const value = e.target.value;
        SetInputList(value);
    }

    const AddToDoList = (e) => {
        // console.log(InputList);
        const PrevData = [...ToDoList];
        const PrevItemCount = {...ItemCount};
        const checkData = check(InputList, PrevData, PrevItemCount);
        if (checkData === true) {
            const NewData = [...PrevData, InputList];
            SetToDoList(NewData);
            
            PrevItemCount.currentCount = PrevItemCount.currentCount + 1;
            SetItemCount(PrevItemCount);
            

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


        const PrevItemCount = {...ItemCount};
        PrevItemCount.currentCount = PrevItemCount.currentCount - 1;
            SetItemCount(PrevItemCount);


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
                <div className="container-todo">
                <div className="todo-wrapper">

                <div className="main-wrapper">
                    <div className="main-todo">
                        <div className='total'>
                            <span className='currentCount'>{ItemCount.currentCount}</span><span className='totalCount'>/{ItemCount.limit}</span>
                        </div>
                        <div className="to-do-input">
                            <input type="text" className="f-control" name="todo-item" id="todo-item" placeholder="Add Items" onChange={(e) => AddItems(e)} value={InputList} />
                        </div>
                        <div className="todo-btn">
                            <button className="btn btn-add-todo btn-todo" onClick={(e) => AddToDoList(e)}><FontAwesomeIcon icon={addIcon}/></button>
                        </div>
                    </div>
                    <div className="todo-lists-items">
                        <ul className="list">

                            {ToDoList.length > 0 ? (ToDoList.map((element, key) => {
                                return (
                                    <li className="list-item" key={key}><div className="list-todo-item"><div className="list-todo-item-main"><Completed onCompleted={(e) => handleCompleted(e, key, element.replace(/ /g, '-'))} value={element} id={element.replace(/ /g, '-')} /><label htmlFor={element.replace(/ /g, '-')} className={IsCompleted[element] === true ? "strikeout" : ""}>{element}</label> </div><div className="todo-btn-wrapper"><Delete deleteIcon={deleletIcon} onDelete={(e) => handleDelete(e, key, element.replace(/ /g, '-'))} /></div></div></li>
                                )
                            })) : (
                                <li> No results found</li>
                            )}
                        </ul>

                    </div>
                </div>
                </div>
                </div>

            </main>
        </>
    )
}
export default Main;