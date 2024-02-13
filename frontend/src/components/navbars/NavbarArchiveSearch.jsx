import { useState } from "react";
import { Container, Form, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NavbarArchiveSearch = ({ news, setFilteredNews }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDateFilterChange = (date) => {
    const formattedDate = date.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    setSelectedDate(formattedDate);
  };
  console.log(news);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Filter news based on the search query and date filter
    const filteredNews = news.filter((vest) => {
      const isTitleMatch = vest.naslov;
      const isTagMatch = vest.tag
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      console.log("VEST DATE" + vest.datum);

      const isDateMatch = !selectedDate || vest.datum === selectedDate;

      return isTitleMatch && isDateMatch && isTagMatch;
    });

    // Update the filtered news state
    setFilteredNews(filteredNews);
  };
  const handleAllButtonClick = () => {
    // Reset the filtered news to the original list of all news
    setFilteredNews(news);
    // Clear the search query and selected date
    setSearchQuery("");
    setSelectedDate(null);
  };

  return (
    <Navbar fixed="top" expand="lg" variant="dark" className="bg-dark shadow">
      <Container fluid>
        <Navbar.Brand href="#">News</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Link to={`/Archive`} className="ms-auto d-flex me-3">
            <Button variant="outline-success" onClick={handleAllButtonClick}>
              All
            </Button>
          </Link>

          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-2"
              value={searchQuery}
              onChange={handleSearchChange}
            />

            <DatePicker
              className="mx-2 p-2 bg-dark rounded"
              dateFormat="yyyy-MM-dd"
              selected={selectedDate}
              onChange={(date) => handleDateFilterChange(date)}
              placeholderText="Select date"
            />

            <Button className="p-2" variant="outline-success" type="submit">
              Search
            </Button>
          </Form>

          <Link
            to={`/Login`}
            className="btn btn-outline-success p-2 mx-2
          
          "
          >
            Log in
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavbarArchiveSearch.propTypes = {
  news: PropTypes.array.isRequired,
  setFilteredNews: PropTypes.func.isRequired,
};

export default NavbarArchiveSearch;
