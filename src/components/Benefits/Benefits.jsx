import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import { fetchNewsData } from '../../actions/fetchNewsData'
import getFormatDateForNews from '../../utils/getFormatDateForNews'
import { useNavigate } from 'react-router-dom'
import { sendNews } from '../../reducer/currentNewsSlice'


function Benefits() {
    const news = useSelector(state => state.news)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchNewsData());
    }, [dispatch]);

    const selectedNews = news?.news?.results ? news.news.results.slice(9, 13) : [];

    function handleSubmit(id, idx) {
        const assetId = id
        const selectedNews = news?.news?.results?.find(newsItem => newsItem.id === parseInt(assetId))
        dispatch(sendNews(selectedNews))
        navigate(`/news/${assetId}/${idx}`)
    }

    return (
        <>
            <h1 className='fs-1 text-light fst-italic fw-lighter text-center m-4'>News About Weather</h1>
            <div className='my-4 d-flex align-items-center justify-content-evenly'>
                {selectedNews.map((item, index) => (
                    <Card
                        key={index}
                        className='border-secondary rounded shadow-sm'
                        color="dark"
                        inverse
                        style={{
                            width: '18rem',
                        }}
                    >
                        <img
                            className='rounded-top'
                            alt="Sample"
                            src={item.media[0]['media-metadata'][0]['url']}
                        />
                        <CardBody>
                            <CardTitle tag="h5" className='fs-4 fst-italic fw-lighter'>
                                {item.title.length > 10 ? item.title.substring(0, 30) + "..." : title}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-secondary fw-light"
                                tag="h6"
                            >
                                {getFormatDateForNews(item.updated)}
                            </CardSubtitle>
                            <CardText className='fw-light'>
                                {item.abstract.length > 5 ? item.abstract.substring(0, 55) + "..." : title}
                            </CardText>
                            <Button onClick={() => handleSubmit(item.id, index)} className='fw-light text-light rounded-end border border-secondary' color='dark'>
                                Continue Reading
                            </Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Benefits