import { Popover } from "react-bootstrap";

export const renderInfo = (video) => (
  <Popover id="popover-basic">
    <Popover.Title as="h3">{video.snippet.title}</Popover.Title>
    <Popover.Content>{video.snippet.description}</Popover.Content>
  </Popover>
);
