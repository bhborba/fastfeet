export function editRequest(data) {
    return {
        type: '@package/EDIT_REQUEST',
        payload: { data },
    };
}

export function editSuccess() {
    return {
        type: '@package/EDIT_SUCCESS',
    };
}

export function editFailure() {
    return {
        type: '@package/EDIT_FAILURE',
    };
}
