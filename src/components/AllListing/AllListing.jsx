import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";

export default function AllListingComponent({properties}) {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1">Price low to High</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Price High to Low</Dropdown.Item>
          <Dropdown.Item href="#/action-3">sort</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br></br>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {properties.map(property => 
            <Card style={{ height: "30rem", width: "18rem" }}>
            <a href="/user/listingdetail">
              <Card.Img
                variant="top"
                src={property.image}
                height="255px"
              />
              <Card.Body>
                <Card.Title>{property.address}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Price:$1000
                </Card.Subtitle>
                <Card.Text>Bedroom 3 Bathroom 2</Card.Text>
              </Card.Body>
            </a>
            <button type="button" class="btn btn-default btn-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-bookmark-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
            </button>
          </Card>
        )}
      </div>
    </div>
  );
}