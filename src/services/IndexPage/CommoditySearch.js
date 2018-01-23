import request from '../../utils/request';
import queryString from 'querystring';

const api = '/CommoditySearch';

export async function getData(payload) {
    const {desc, keyword, sort_by} = payload;
    const params = {
        desc: desc,
        keyword: keyword,
        sort_by: sort_by,
        index_name: 'product_name_index_smart',
        page_no: 0,
        page_size: 10,
    };
    return request(api + '/es_search', {
        method: 'POST',
        credentials: 'include',
        body: params,
        headers: {
            channel: 'm',
        }
    });
}
