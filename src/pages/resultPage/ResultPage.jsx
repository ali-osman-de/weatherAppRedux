import React from 'react'
import Jumbotron from '../../components/Jumbotrn/Jumbotron'
import { Col, Container, Row } from 'reactstrap'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function ResultPage() {
    return (
        <>
            <Container>
                <Header />

                <Row>
                    <Col xs="12">
                        <Jumbotron />
                    </Col>
                </Row>

                <Row>
                    <Col xs="12">
                    </Col>
                </Row>
                <Footer />
            </Container>
        </>
    )
}

export default ResultPage