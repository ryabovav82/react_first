import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Victor"},
        {id: 5, name: "Valera"}
    ];

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Fuck"},
        {id: 5, message: "Habit"}
    ];
    let dialogsElements = dialogsData.map(item => (<DialogItem name={item.name} id={item.id}/>));
    let mesagesElements = messagesData.map(item => (<Message message={item.message}/>));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {mesagesElements}
            </div>
        </div>
    );
}

export default Dialogs;