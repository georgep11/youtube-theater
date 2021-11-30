import { Row, Col, Image, OverlayTrigger, Popover } from "react-bootstrap";
import { renderInfo } from "./infoPopOver";

const VideoList = (props) => (
  <Row className="thumbnailRow">
    {props.videos.items.map((video) => (
      <Col
        xs="auto"
        sm="5"
        md="3"
        lg="3"
        xl="auto"
        id="thumbnailCol"
        key={video.etag}
        onClick={() => props.changeVideo(video.id.videoId)}
      >
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderInfo(video)}
        >
          <Image src={video.snippet.thumbnails.medium.url} />
        </OverlayTrigger>
        <Row className="descriptionRow"></Row>
      </Col>
    ))}
  </Row>
);

export default VideoList;
