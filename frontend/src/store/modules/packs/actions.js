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

export function addRequest(recipient, deliveryman, product) {
    return {
        type: '@package/ADD_REQUEST',
        payload: { recipient, deliveryman, product },
    };
}

export function addSuccess() {
    return {
        type: '@package/ADD_SUCCESS',
    };
}

export function addFailure() {
    return {
        type: '@package/ADD_FAILURE',
    };
}
