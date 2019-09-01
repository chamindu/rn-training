
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

let nextId = 1;

export function showNotificationWithTimeout(dispatch, text) {
    const id = nextId++;
    dispatch(showNotification(id, text));
    setTimeout(() => hideNotification(id), 3000);
}