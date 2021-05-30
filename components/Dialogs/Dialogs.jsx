import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="/dialogs/1">Misha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Jenek</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Serega</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Sanek</NavLink>
                </div>
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