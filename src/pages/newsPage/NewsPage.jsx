import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import NewsContianer from '../../components/NewsContainer/NewsContianer';
import Header from '../../components/Header/Header';
import NewsContainerTimeLine from '../../components/NewsContainerTimeLine/NewsContainerTimeLine';
import Footer from '../../components/Footer/Footer';

function NewsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            <Header />
            <Row>
                <Col xs="12">
                    <NewsContianer />
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <h1 className='text-white text-center fs-1 fw-lighter'>More News</h1>
                    <NewsContainerTimeLine />
                </Col>
            </Row>
            <Footer />
        </Container>
    );
}

export default NewsPage;
