import classes from './../Dialogs.module.css'

const Message =(props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}
let messagesElements = props.messages.map( m => <Message message={m.message}/>);
export default Message;