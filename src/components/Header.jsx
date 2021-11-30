import {
  Container,
  Row,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useState } from "react";

const Header = (props) => {
  const [searchInput, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchHandler(searchInput);
  };

  return (
    <header className="header">
      <Container>
        <Row className="headerRow">
          <h1>Youtube Theater</h1>
        </Row>
        <form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button type="submit" variant="secondary">
                Search
              </Button>
            </InputGroup.Prepend>
            <FormControl
              aria-describedby="basic-addon1"
              onChange={(e) => setInput(e.target.value)}
            />
          </InputGroup>
        </form>
      </Container>
    </header>
  );
};

export default Header;
