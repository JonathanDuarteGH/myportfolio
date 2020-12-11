import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-error">
        <div className="error-container">
          <h1>the page you were looking for doesn't exist!</h1>
          <Link to='/' className="btn">
            back home
        </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
