import React, { Component } from 'react';
import { Button, Form, Row, Col, Badge, Card, CardBody, CardHeader, CardText } from 'reactstrap';

const EntryBody = props => {
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    const lines = props.entryData.map((line, index) => {
        return (
            <div key={index}>
                    <Card className="m-3" id="entryCard">
                                <CardHeader>
                                    <Form>
                                        <Row>
                                            <Col>
                                            <h2>{line.title}</h2>
                                            <Badge id="dateTag">{date}</Badge>
                                            </Col>
                                            <Col>
                                            <Button color='danger' className='float-end text-ent ms-3 mb-3 mt-3' onClick={() => props.removeEntry(index)}>Delete</Button>
                                            </Col>
                                        </Row>
                                        {/* <p>{date}</p> */}
                                    </Form>
                                </CardHeader>
                        <CardBody>
                            <CardText>{line.body}</CardText>
                        </CardBody>
                    </Card>
                    
            </div>
        )
    })
    return (
        <div>
            {lines}
        </div>
    )
}

const Entries = (props) => {

        const { entryData, removeEntry } = props;
        return (
            <div>
                    <EntryBody entryData={entryData} removeEntry={removeEntry}/>
            </div>
        )

}

export default Entries