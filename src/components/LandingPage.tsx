import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { error } from "console";

interface Article {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

interface Result {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: Date;
  updated_at: Date;
  featured: boolean;
  launches: Launch[];
  events: any[];
}

interface Launch {
  launch_id: string;
  provider: string;
}

const LandingPage = () => {
  const [spaceArticles, setspaceArticles] = useState<Article[]>([]);
  const gettingArticles = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      if (response.ok) {
        const results = await response.json();

        setspaceArticles(results);
      } else {
        throw new Error("ERROR" + response.status);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    gettingArticles();
  }, []);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Row className="justify-content-center">
            {spaceArticles.results.map((singleArticle) => (
              <Col key={singleArticle.id} xs={12} md={4}>
                <Card>
                  <Card.Img variant="top" src={singleArticle.image_url} />
                  <Card.Body>
                    <Card.Title>{singleArticle.title}</Card.Title>
                    <Card.Text>{singleArticle.summary}</Card.Text>
                    <Button variant="primary" href={singleArticle.url}>
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
