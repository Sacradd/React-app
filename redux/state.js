let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi? how are you?', likesCount: 20},
                {id: 3, message: 'Its my first post', likesCount:30}
            ],
            newPostText: 'Example'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 3, message: 'Yo'},
                {id: 2, message: 'How is your i-kamasutra'},
                {id: 4, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Misha'},
                {id: 2, name: 'Jenek'},
                {id: 3, name: 'Serega'},
                {id: 4, name: 'Sanek'}
            ],
            newMessageText: 'Primer'
        },
        sitebar: {}
    },
    _callSubscriber () {
        console.log('State changed');
    },

    getState(){
        return this._state;
    },
    subscribe  (observer)  {
        this._callSubscriber = observer;
    },

    dispatch(action){   // { type: 'ADD-POST' }
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === 'ADD-MESSAGE'){
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;
export default store;