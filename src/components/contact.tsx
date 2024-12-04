import "../style/contact.css";

function Contact() {
  return (
    <main className="contact-main">
      <div className="form-container">
        <h1 className="contact-title">Contact Us</h1>
        <form action="#" method="POST" className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              className="msg"
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
