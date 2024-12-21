import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {newsSelectors} from '../redux/newsData';
import {
    getLatestNews,
    getArticleNews
} from '../services/getNewsData';

import LatestNews from '../component/Home/LatestDisplay';
import ArticleNews from '../component/Home/ArticleDisplay';

const Home = () => {
    const dispatch = useDispatch();

    // reciev data from store
    const latestNewsList = useSelector(
        newsSelectors.getLatestNews
    )

    const artilceNewsList = useSelector(
        newsSelectors.getArticleNews
    )

    // calling action
    useEffect(() => {
        dispatch(getLatestNews())
        dispatch(getArticleNews())
    },[])

    return(
        <>
            <LatestNews ldata={latestNewsList?.data}/>
            <ArticleNews adata={artilceNewsList?.data}/>
        </>
    )

}

export default Home