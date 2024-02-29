import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getFormatDateForNews from '../../utils/getFormatDateForNews';
import { sendNews } from '../../reducer/currentNewsSlice';

function NewsContainerTimeLine() {
    const news = useSelector(state => state.news);
    const dispatch = useDispatch();
    const knowledge = news.news.results;

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    function handleSubmit(id, idx) {
        const assetId = id;
        const selectedNews = news?.news?.results?.find(newsItem => newsItem.id === parseInt(assetId));
        dispatch(sendNews(selectedNews));
        scrollUp(); // Sayfanın en üstüne kaydır
    }

    return (
        <div>
            {knowledge.map((item, index) => (
                <div key={index} className="card text-center rounded shadow-lg bg-dark opacity text-light my-3 border border-info-subtle mb-5">
                    <img src={item.media[0]['media-metadata'][0].url} className='shadow-lg rounded-top' alt="picture" style={{
                        height: "300px"
                    }} />
                    <div className="card-body">
                        <h5 className="card-title fw-normal">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <a className="btn btn-warning" onClick={() => handleSubmit(item.id, index)}>Read More</a>
                    </div>
                    <div className="card-footer fw-lighter fs-6">
                        {getFormatDateForNews(item.updated)}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewsContainerTimeLine;
