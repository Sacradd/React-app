import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message =(props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <button className={classes.button} onClick={ addMessage }>Send message</button>
            <textarea onChange={onMessageChange} className={classes.textarea} ref={newMessageElement}
                      value={props.newMessageText}></textarea>
        </div>
    )
}

export default Dialogs;