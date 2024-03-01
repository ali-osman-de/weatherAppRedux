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
        <div className="text-center rounded-3 shadow-lg bg-dark opacity text-light border border-info-subtle p-5 m-5">

            <div className='d-flex justify-content-evenly align-items-center mt-5'>
                <div className='mx-4'>
                    <img src={currentNews?.media[0]['media-metadata'][0]['url']} className='shadow-lg rounded-4' style={{
                        height: "500px",
                    }} alt="picture" />
                </div>
                <div className="fs-2 fw-semibold text-start">
                    {newsData.title}
                    <div className="text-start lh-base mt-5">
                        <p className=" fs-5 fw-light">{newsData.abstract}</p>
                    </div>
                </div>

            </div>
            <div className="card-footer text-end fw-lighter fs-5 mt-3 text-secondary">
                {newsData.publish_date}
            </div>

        </div>
    );
}

export default NewsContainer;
