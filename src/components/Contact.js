import React,{useState} from "react";
import contcatImg from "../img/contact1.jpg";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    //object deStructing
    //store object data in variable
    const { name, email, message } = user;

    try {
      const res = await fetch("/message", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Message Not Sent Try Later");
      }else{
        window.alert("Message Sent.");
        setUser({
          name: "",
          email: "",
          message: "",
        })
      }
    } catch (error) {}
  };

  return (
    <div>
      <section id="contcat">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b> Question?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <img
                src={contcatImg}
                class="img-fluid mx-auto"
                alt="Responsive image"
              />
            </div>
            <div className="col-md-6 pt-6">
              <form onSubmit={handleSubmit} method="POST">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                  name="name"
                  value={user.name}
                  onChange={handleInput}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Your Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  name="message"
                  value={user.message}
                  onChange={handleInput}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary rounded-pill px-4">
                <i className="fa fa-paper-plane "></i>Send Message
              </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
