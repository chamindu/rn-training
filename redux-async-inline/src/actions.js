
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