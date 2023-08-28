import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/My-context'; // Импортируйте контекст

const Header = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Состояние для значения поиска
  const { getRandomMeals } = useContext(MyContext); // Получение функции getRandomMeals из контекста

  const handleSearch = (e) => {
    e.preventDefault();
    getRandomMeals(searchTerm); // Вызов функции getRandomMeals с передачей значения поиска
    setSearchTerm(''); // Сброс значения поиска после отправки
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: '#23180d' }} variant="dark">
        <Container>
          <Navbar.Brand>
            <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Link to="/">
                <Button variant="danger">Home</Button>
              </Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="success" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
