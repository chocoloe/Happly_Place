import React, { Component } from 'react';
import { Button, Form, Row, Col, Badge, Card, CardBody, CardHeader, CardText } from 'reactstrap';

const EntryBody = props => {
    // Creates date object to be displayed with journal entry
    const current = new Date();
    // Formate date
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    const cardLines = (
        <Row>
            {props.entryData.map((line, index) => (
                <Col xs="4" key={index}>
                    <Card className="m-3" id="entryCard">
                        <CardHeader>
                            <Form>
                                <Row>
                                    <Col>
                                        <h2>{line.title}</h2>
                                        <Badge id="dateTag" aria-label="date">{date}</Badge>
                                    </Col>
                                    <Col>
                                        <Button color='danger' className='float-end text-ent ms-3 mb-3 mt-3' aria-label="delete" onClick={() => props.removeEntry(index)}>Delete</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </CardHeader>
                        <CardBody>
                            <CardText>{line.body}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    );
    return (
        <div>
            {cardLines}
        </div>
    );
}


const Entries = (props) => {
    const { entryData, removeEntry } = props;
    
    return (
        <div>
            <EntryBody entryData={entryData} removeEntry={removeEntry}/>
        </div>
    );

}

export default Entries