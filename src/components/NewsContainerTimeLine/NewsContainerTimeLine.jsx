import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getFormatDateForNews from '../../utils/getFormatDateForNews';
import { sendNews } from '../../reducer/currentNewsSlice';
import "./NewsContainerTimeLine.css"

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
        scrollUp();
    }

    // Üçerli gruplara ayırma işlemi
    const groupSize = 3;
    const groupedKnowledge = knowledge.reduce((acc, val, i) => {
        const groupIndex = Math.floor(i / groupSize);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(val);
        return acc;
    }, []);

    return (
        <div>
            {groupedKnowledge.map((group, groupIndex) => (
                <div key={groupIndex} className="row justify-content-center">
                    {group.map((item, index) => (
                        <div key={index} className="col-lg-4 col-sm-4 my-4">
                            <div className="card text-center rounded shadow-lg bg-dark opacity text-light my-3 border border-info-subtle mb-3" onClick={() => handleSubmit(item.id, index)} style={{
                                height:"500px"
                            }}>
                                <img
                                    src={item.media && item.media.length > 0 && item.media[0]['media-metadata'] ? item.media[0]['media-metadata'][0].url : 'varsayılan-resim-url'}
                                    className='shadow-lg rounded-top'
                                    alt="picture"
                                    style={{
                                        height: "300px",
                                        objectFit: "cover"
                                    }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-normal">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <a className="btn btn-warning" >Read More</a>
                                </div>
                                <div className="my-3 fw-light fs-6 text-secondary">
                                    {getFormatDateForNews(item.updated)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default NewsContainerTimeLine;
