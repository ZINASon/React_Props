import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import wordpress from './site-Wordpress.jpg'
import base from './html_Css_Js.png'
import webdesign from './webdesign.jpg'
import referencement from './referencement-seo.jpg'

function BasicExample() {
  return (

    <div>
      <h3>Projects</h3>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={wordpress} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Img variant="top" src={base} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Img variant="top" src={referencement} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Img variant="top" src={webdesign} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;