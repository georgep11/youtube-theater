import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Container, Row, Col } from "react-bootstrap";
import VideoList from "./VideoList";

const Display = (props) => {
  const [currentVideo, setVideo] = useState("9E6b3swbnWg");
  const changeVideo = (video) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setVideo(video);
  };

  return (
    <Container id="displayContainer">
      <Row className="displayRow">
        <Col lg="auto" id="displayCol">
          <ReactPlayer
            playing={true}
            light
            controls={true}
            url={`https://www.youtube.com/watch?v=${currentVideo}`}
          />
        </Col>
      </Row>
      {props.videos.items[1] ? (
        <VideoList videos={props.videos} changeVideo={changeVideo} />
      ) : null}
    </Container>
  );
};

export default Display;
