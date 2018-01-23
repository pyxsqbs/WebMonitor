import {getData} from '../../services/IndexPage/CommoditySearch'

export default {
    namespace: 'CommoditySearch',

    state: {
        data: {
            data: {
                data: [],
            },
        },
        text: {},
        switchVal: false,
    },

    reducers: {
        INIT(state, {payload}) {
            return Object.assign({}, {
                classification: [],
                geogId: '',
                queryKnowledgeTableData: [],
                totalProperty: 0,
            });
        },

        initData(state, {payload}) {
            state.data = payload;
            return Object.assign({}, state);
        },

        initText(state, {payload}) {
            state.text = payload;
            return Object.assign({}, state);
        },

        changeSwitchVal(state, {payload}) {
            state.switchVal = payload;
            return Object.assign({}, state);
        },
    },

    effects: {
        * getValue({payload}, {call, put, select}) {
            yield put({type: 'initText', payload: payload});
            const result = yield call(getData, payload);
            if (JSON.stringify(result).indexOf('"err":') === -1 && result.data.status === 1000) {
                yield put({type: 'initData', payload: result});
            } else {
                result.data = Object.assign(result.data, {
                    data: [],
                });
                yield put({type: 'initData', payload: Object.assign({},result)});
            }
        },
    },

    subscriptions: {},
};
