import request from '../../utils/request';
import queryString from 'querystring';

const api = '/CommoditySearch';

export async function getData(payload) {
    const {desc, keyword, sort_by} = payload;
    let formData = new FormData();
    formData.append('keyword', keyword);
    formData.append('index_name', 'product_name_index_smart');
    formData.append('desc', desc);
    formData.append('sort_by', sort_by);
    //formData.append('page_no', 0)
    //formData.append('page_size', 10)

    return request(api + '/es_search', {
        method: 'POST',
        credentials: 'include',
        body: formData,
    });
}

