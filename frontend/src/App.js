import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'reactstrap'


class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            notes: [],
            current_note_id: 0,
            is_creating: true
        }
    }


  render() {

    return(
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="10">
                        <h2>Realtime Trading Notes</h2>
                    </Col>
                    <Col xs="2">
                        <Button color="success">Create Note</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                        <h5>List our notes here</h5>
                    </Col>
                    <Col xs="8">
                        <p> Edit content here</p>
                    </Col>


                </Row>

            </Container>

        </React.Fragment>

    )

   };
}

export default App;
