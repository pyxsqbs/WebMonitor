import request from '../../utils/request';
import queryString from 'querystring';
import api from '../../utils/api';

export async function getData(payload) {
    const {session_id, username, robot_bubble, user_bubble, fuzzy, time, score} = payload;
    const startTime = (time) ? time[0].format('x') : '';
    const endTime = (time) ? time[1].format('x') : '';
    const params = {
        'session_id': session_id || '',
        'username': username || '',
        'robot_bubble': robot_bubble || '',
        'user_bubble': user_bubble || '',
        'fuzzy': fuzzy || '',
        'score': score || '',
        'startTime': startTime || '',
        'endTime': endTime || '',
    };
    return request(api + '/?' + queryString.stringify(params), {
        method: 'GET',
        credentials: 'include',
        headers: {
            channel: 'm',
        }
    });
}
