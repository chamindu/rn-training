
export function showNotification(id, text) {
    return {
        type: 'SHOW_NOTIFICATION',
        payload: {
            id,
            text,
        },
    };
}

export function hideNotification(id) {
    return {
        type: 'HIDE_NOTIFICATION',
        payload: {
            id,
        }
    };
}

let id = 0;

export function showNotificationWithTimeout(text) {
    let newId = ++id;
    return function(dispatch) {
        dispatch(showNotification(id, text));
        setTimeout(() => dispatch(hideNotification(newId)), 3000);
    }
}