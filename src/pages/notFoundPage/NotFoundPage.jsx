import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Header from '../../components/Header/Header'

function NotFoundPage() {
    return (
        <>
            <Container>
                <Header />
                <Row>
                    <Col xs="12">
                        <div className='my-3 bg-dark text-light shadow-lg border border-danger rounded-4'>
                            <div className='p-5 m-5 text-center'>
                                <h1 className='fs-1 fw-lighter text-capitalize'>something went wrong...</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NotFoundPage