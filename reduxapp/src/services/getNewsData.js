import axios from 'axios';

import {
    LATEST_NEWS,
    ARTICLE_NEWS
} from '../redux/newsData/actionType';

const baseUrl = " http://localhost:9900"

export const getLatestNews = () => {
    return dispatch => {
        dispatch({
            type:LATEST_NEWS,
            payload:{data:[]}
        })

        return axios.get(`${baseUrl}/articles?_end=3`).then((res) => {
            const respData = res.data;
            dispatch({
                type:LATEST_NEWS,
                payload:{data:respData}
            })
        })
    }
}


export const getArticleNews = () => {
    return dispatch => {
        dispatch({
            type:ARTICLE_NEWS,
            payload:{data:[]}
        })

        return axios.get(`${baseUrl}/articles?_start=3&_end=10`).then((res) => {
            const respData = res.data;
            dispatch({
                type:ARTICLE_NEWS,
                payload:{data:respData}
            })
        })
    }
}