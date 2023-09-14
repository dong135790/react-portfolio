function Contact() {
  return (
    <>
    <div>Contact</div>
    <form>
      <label htmlFor="firstName">First Name:</label><br/>
      <input type="text" id='firstName' name="firstName"/><br />
      <label htmlFor="email">Email address:</label><br/>
      <input type="text" id='email' name="email"/><br/>
      <label htmlFor="message">Message</label><br/>
      <input type="text" id='message' name="message"/><br/>
      <input type="submit" value="Submit" />
    </form>
    </>
  )
}

export default Contact