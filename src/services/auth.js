import apiFetch from '@/utils/request';

export async function signIn(data) {
    return apiFetch('/auth/signin', {
        method: 'POST',
        body: data,
    });
}

export async function signUp(data) {
    return apiFetch('/auth/signup', {
        method: 'POST',
        body: data,
    });
}