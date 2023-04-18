import React, { Component } from 'react';
import CarouselBoxHk from "../CarouselBoxHk";
import { Button, Card, CardImg, Container } from "react-bootstrap";
class Home extends Component {
    render() {
        return (
            <CarouselBoxHk />,
            <Container>
                <h2 className="text-center m-4">{this.props.language === 'en' ? 'Our team' : 'Наша команда'}</h2>
                <div className="row">
                    <div className="col">
                        <Card className="m-4 text-center" bg="light" border="primary">
                            <Card.Img
                                variant="top"
                                src="https://www.kv.by/sites/default/files/pictures/userpictures/2019/11/29/2359/foto6_1.jpg"
                            />
                            {this.props.language  === 'en' && (
                                <Card.Body>
                                    <Card.Title>Developers</Card.Title>
                                    <Card.Text>
                                        Comand 1
                                    </Card.Text>
                                    <Button variant="primary">About team</Button>
                                </Card.Body>
                            )}
                            {this.props.language  === 'ua' && (
                                <Card.Body>
                                    <Card.Title>Розробники</Card.Title>
                                    <Card.Text>
                                        Команда 1
                                    </Card.Text>
                                    <Button variant="primary">Про команду</Button>
                                </Card.Body>
                            )}
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="m-4 text-center" bg="light">
                            <Card.Img
                                variant="top"
                                src="https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg"
                            />
                            <Card.Body>
                                <Card.Title>{this.props.language === 'en' ? 'Naturalists' : 'Природознавці'}</Card.Title>
                                <Card.Text>
                                {this.props.language === 'en' ? 'Comand 2' : 'Команда 2'}
                                </Card.Text>
                                <Button variant="primary">{this.props.language === 'en' ? 'About team' : 'Про команду'}</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col">
                        <Card className="m-4 text-center" bg="light">
                            <Card.Img
                                variant="top"
                                src="https://www.kv.by/sites/default/files/pictures/userpictures/2019/11/29/2359/foto6_1.jpg"
                            />
                            <Card.Body>
                                <Card.Title>{this.props.language === 'en' ? 'Marketers' : 'Маркетилоги'}</Card.Title>
                                <Card.Text>
                                {this.props.language === 'en' ? 'Comand 3' : 'Команда 3'}
                                </Card.Text>
                                <Button variant="primary">{this.props.language === 'en' ? 'About team' : 'Про команду'}</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>


        );
    }
}

export default Home;
