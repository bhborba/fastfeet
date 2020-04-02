export function editRequest(item) {
    return {
        type: '@edit/EDIT_REQUEST',
        payload: { item },
    };
}

export function editSuccess() {
    return {
        type: '@edit/EDIT_SUCCESS',
    };
}
