import { Container, Spinner, Row } from 'react-bootstrap';
import '../Home/Home.css';


function Loader(){


    return (
        <>
            <Container fluid className='px-0'>
                <div className='flexCenter align-items-center bg-primary' style={{height: '100vh'}}>
                    <Row style={{width: '80%', height: '80vh', color: 'white'}}>
                        <div className='leftSection col-12 px-0'>
                            <div className='black d-flex justify-content-center align-items-center'>
                                <Spinner style={{width: '5rem', height: '5rem'}} animation="border" variant="primary" />
                            </div>
                        </div>
                    </Row>
                </div>

            </Container>
        </>
    )
}

export default Loader;