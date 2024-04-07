// utils/api.js
const BASE_URL = 'http://127.0.0.1:9000';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


async function apiFetch(endpoint, { body, ...customConfig } = {}) {


    const session = await getServerSession(authOptions);

    let Authorization = '';
    if (session !== null)
        Authorization = session.accessToken;

    const reqHeaders = { 'Content-Type': 'application/json', Authorization: Authorization };

    const config = {
        method: body,
        ...customConfig,
        headers: {
            ...reqHeaders,
            ...customConfig.headers,
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    // 尝试获取token，如果不存在，则默认为空字符串
    const headers = response.headers;

    const data = await response.json();

    if (response.ok) {
        // 返回数据和token
        return { data, headers };
    } else {
        throw new Error(data.message || 'Something went wrong');
    }
}

export default apiFetch;
