import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="how to contact me" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xpzoylpj" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="name" className="form-control" required />
              <input type="text" name="email" placeholder="email" className="form-control" required />
              <textarea name="message" rows="5" placeholder="message" className="form-control" required></textarea>
            </div>
            <button type="submit" value="Send" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
