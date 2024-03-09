import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Description from '../../components/Description/Description'
import SearchBar from '../../components/SearhBar/SearchBar'
import Highlight from '../../components/Highlight/Highlight'
import Benefits from '../../components/Benefits/Benefits'
import FeatureHighPict from '../../components/FeatureHigh/FeatureHighPict'
import FeatureHigh from '../../components/FeatureHigh/FeatureHigh'
import Footer from '../../components/Footer/Footer'

function MainPage() {

    return (
        <>
            <Container>
                <Header />
                <Row>
                    <Col xs="12">
                        <Hero />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Description />
                    </Col>
                </Row>
                <Row className='d-flex align-items-center'>
                    <Col xs="12" md="6">
                        <SearchBar />
                    </Col>
                    <Col xs="12" md="6">
                        <Highlight />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Benefits />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <FeatureHighPict />
                    </Col>
                    <Col xs="12" md="6">
                        <FeatureHigh />
                    </Col>
                </Row>
                <Footer />
            </Container>
        </>
    )
}

export default MainPage