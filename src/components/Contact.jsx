// the code file that holds the contact page code
export default function Contact() {
  return (
    <>
      <h1>Contact Me</h1>
      <form action="/">
        <label htmlFor="firstName">First Name: </label>
        <input type="text" name="firstName" />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name="lastName" />
        <br />
        <label htmlFor="contactNumber">Contact Number: </label>
        <input type="text" name="contactNumber" />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" />
        <br />
        <label htmlFor="message">Message: </label>
        <input type="text" name="message" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
