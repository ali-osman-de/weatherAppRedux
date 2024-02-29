import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getFormatDate from '../../utils/getFormatDate';

function NewsContainer() {
    const currentNews = useSelector(state => state.currentNews.currentNews);
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
        if (currentNews) {
            const { title, abstract, updated } = currentNews;
            const publish_date = getFormatDate(updated, navigator.language);
            setNewsData({ title, abstract, publish_date });

        }
    }, [currentNews]);

    if (!newsData) {
        return (
            <div className="d-flex justify-content-center m-5 p-5">
                <div className="spinner-border text-info" style={{ height: "75px", width: "75px" }} role="status">
                    <span className="visually-hidden" >
                        Loading...
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className="card text-center rounded-4 shadow-lg bg-dark opacity text-light my-3 border border-info-subtle">
            <div className="card-header fs-4 fw-light my-3">
                {newsData.title}
            </div>
            <img src={currentNews?.media[0]['media-metadata'][0]['url']} className='shadow-lg' style={{
                height: "500px",
            }} alt="picture" />
            <div className="card-body">
                <p className="card-text fs-5 fw-light">{newsData.abstract}</p>
            </div>
            <div className="card-footer fw-lighter fs-6 ">
                {newsData.publish_date}
            </div>
        </div>
    );
}

export default NewsContainer;
