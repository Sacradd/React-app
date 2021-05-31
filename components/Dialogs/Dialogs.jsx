import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

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

const Dialogs = () => {

    let dialogs =  [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Jenek'},
        {id: 3, name: 'Serega'},
        {id: 4, name: 'Sanek'}
        ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 3, message: 'Yo'},
        {id: 2, message: 'How is your i-kamasutra'},
        {id: 4, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = messages.map( m => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;