import { useState } from "react"
import { sendMessage } from "../../hooks/contact/sendMessage.js"

function Contact() {
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendMessage(messageData);
    if (result.success) {
      setStatusMessage("Message sent successfully!");
      setSuccess(true);
    } else {
      setStatusMessage("Failed to send message. Please try again later.");
      setSuccess(false);
    }
  };

  return (
    <div className="hero flex-grow">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-center lg:items-center lg:gap-20">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">📬 Get in Touch</h1>
          <p className="py-6">
            Have a question, suggestion, or just want to say hello? <br /><br />
            We’re always happy to hear from learners, readers, and curious minds like you. <br /><br />

            Whether you’re stuck on a tricky concept, looking for more information about our courses or blogs, experiencing a technical issue, or simply want to share your thoughts — you’re in the right place. <br /><br />

            Our team reads every message with care and does our best to respond promptly.
            Just fill out the form below, and we’ll get back to you as soon as we can. <br /><br />

            No question is too small — if it matters to you, it matters to us.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl border-1 dark:border-green-500">
          <form className="card-body" onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <div>
                <input
                  className="input validator w-full bg-transparent focus:outline-black dark:focus:outline-white border-1 border-black dark:border-gray-600"
                  type="text"
                  placeholder="NAME"
                  value={messageData.name}
                  onChange={(e) => setMessageData((prev) => ({ ...prev, name: e.target.value }))}
                  required
                />
                <div className="validator-hint">Name is required</div>
              </div>

              <div>
                <input
                  className="input validator w-full bg-transparent focus:outline-black dark:focus:outline-white border-1 border-black dark:border-gray-600"
                  type="email"
                  placeholder="EMAIL"
                  value={messageData.email}
                  onChange={(e) => setMessageData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
                <div className="validator-hint">Enter valid email address</div>
              </div>

              <div>
                <input
                  className="input validator w-full bg-transparent focus:outline-black dark:focus:outline-white border-1 border-black dark:border-gray-600"
                  type="text"
                  placeholder="SUBJECT"
                  value={messageData.subject}
                  onChange={(e) => setMessageData((prev) => ({ ...prev, subject: e.target.value }))}
                  required
                />
                <div className="validator-hint">Subject is required</div>
              </div>

              <div>
                <textarea
                  className="textarea validator w-full bg-transparent focus:outline-black dark:focus:outline-white border-1 border-black dark:border-gray-600"
                  placeholder="MESSAGE"
                  value={messageData.message}
                  onChange={(e) => setMessageData((prev) => ({ ...prev, message: e.target.value }))}
                  required
                ></textarea>
                <div className="validator-hint">Message is Empty</div>
              </div>

              <div className="flex justify-center">
                <button
                  className="btn btn-info"
                  type="submit"
                >
                  SEND MESSAGE
                </button>
              </div>

              {statusMessage && (
                <div role="alert" className="alert alert-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{statusMessage}</span>
                </div>
              )}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
