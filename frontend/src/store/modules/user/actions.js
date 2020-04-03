export function editRequest(name, email, avatarId) {
    return {
        type: '@user/EDIT_REQUEST',
        payload: { name, email, avatarId },
    };
}

export function editSuccess() {
    return {
        type: '@user/EDIT_SUCCESS',
    };
}

export function editFailure() {
    return {
        type: '@user/EDIT_FAILURE',
    };
}

export function addRequest(name, email, avatarId) {
    return {
        type: '@user/ADD_REQUEST',
        payload: { name, email, avatarId },
    };
}

export function addSuccess() {
    return {
        type: '@user/ADD_SUCCESS',
    };
}

export function addFailure() {
    return {
        type: '@user/ADD_FAILURE',
    };
}
