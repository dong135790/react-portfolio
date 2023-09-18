function Contact() {
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     window.location.reload();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  return (
    <>
    <h2>Contact</h2>
    <form>
      <label htmlFor="firstName">First Name:</label><br/>
      <input type="text" id='firstName' name="firstName" required maxLength={20}/><br />
      <label htmlFor="email">Email address:</label><br/>
      <input type="text" id='email' name="email"required /><br/>
      <label htmlFor="message">Message</label><br/>
      <input type="text" id='message' name="message" required minLength={5} maxLength={5000}/><br/>
      <input type="submit" value="Submit" />
    </form>
    </>
  )
}

export default Contact