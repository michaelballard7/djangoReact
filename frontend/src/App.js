import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col} from 'reactstrap'
import ListNotes from './components/ListNotes'

var notes_temp = [
    {
        'id': 1,
        'title': 'TWLO is trending up',
        'content': "TWLO gains 15% in one day lol"
    }, {
        'id': 2,
        'title': 'TWLO is trending flat',
        'content': "TWLO gains 1% in one day"
    }, {
        'id': 3,
        'title': 'TWLO is trending up',
        'content': "TWLO gains 5% in one day"
    }
];

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: notes_temp,
            current_note_id: 0,
            is_creating: true
        }

        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleAddNote = this.handleAddNote.bind(this);
    }

    handleItemClick(id){
        this.setState((prevState)=>{
            return {is_creating:false, current_note_id:id}
        })
    }

    handleAddNote(){
        this.setState((prevState)=>{
            return {is_creating: true}
        })
    }

    render() {
        return (<React.Fragment>
            <Container>
                <Row>
                    <Col xs="10">
                        <h2>Realtime Trading Notes</h2>
                    </Col>
                    <Col xs="2">
                        <Button color="success" onClick={this.handleAddNote}>Create Note</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                        <ListNotes notes={this.state.notes} handleItemClick={(id) => this.handleItemClick(id)}/>
                    </Col>
                    <Col xs="8">
                        <p> Edit content here</p>
                        {
                            this.state.is_creating ?
                            "Creating now..." :
                            `Editing note with id: ${this.state.current_note_id}`
                        }
                    </Col>
                </Row>

            </Container>

        </React.Fragment>)

    };
}

export default App;
