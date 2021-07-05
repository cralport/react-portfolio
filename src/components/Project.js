import React from 'react';
import Card from 'react-bootstrap/Card';

function Project (props) {
    return (
        <div className="col-sm-6 mt-3">
            <Card className="w-100 h-100">
                <Card.Img src={props.project.image} alt={props.project.title} />
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>{props.project.title}</Card.Title>
                        <Card.Text>
                            {props.project.description}                 
                        </Card.Text>
                        <Card.Text>
                            {props.project.tools}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href={props.project.gitLink} target="_blank" rel="noreferrer">GitHub Repository</Card.Link>
                        <Card.Link href={props.project.deployedLink} target="_blank" rel="noreferrer">Deployed Application</Card.Link>
                    </Card.Footer>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default Project;