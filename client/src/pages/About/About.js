import "./AboutStyles.css";

const About = () => {
  return (
    <div className="about-us">
      <div className="title">
        <h3>Welcome to</h3> 
        <h1>BookStore</h1>
      </div>

      <img src="BookStoreWall.jpg" alt="bookstoreimg" />
      <div className="paragraph">
        <p>
          Welcome to BookStore, your trusted destination for books of every
          kind. Located in California, we are proud to offer a wide collection
          of titles covering history, geography, education, and more. Whether
          you prefer shopping in person at our store or exploring our online
          catalog, we are here to connect readers with knowledge and stories
          from around the world.{" "}
        </p>
        <p>
          At BookStore, we believe books should be accessible to everyone.
          That’s why we deliver internationally, ensuring your order reaches you
          within 15 days no matter where you are. Our prices are flexible and
          adjusted according to your local currency, making it easier for
          readers worldwide to enjoy their favorite books.
        </p>
      </div>
      <footer>
        <p>Call us: +1-XXX-XXX-XXXX (California)</p>
        <p>Visit us online: www.bookstore.com</p>
        <p>Follow us on Facebook: facebook.com/bookstorefb</p>
        <h5>Owner: Suhail</h5>
      </footer>
       {/* <h3>
          At BookStore, our mission is simple—bringing the world of books closer
          to you.
        </h3> */}
    </div>
  );
};

export default About;
