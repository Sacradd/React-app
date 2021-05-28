import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>Misha</div>
                <div className={classes.dialog}>Jenek</div>
                <div className={classes.dialog}>Serega</div>
                <div className={classes.dialog}>Sanek</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How is your i-kamasutra</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;