import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaAlignRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { order: DESC, fields: strapiId }) {
      nodes {
        strapiId
        company
        description {
          id
          name
        }
        date
        position
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)

  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, description } = jobs[value]
  return (
    <section className="section jobs">
      <Title title="expierence" />
      <div className="jobs-center">
        <div ckassBane="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                key={item.strapiId}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>

        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map((item, index) => {
            return (
              <div key={item.id} className="job-desc">
                <FaAlignRight className="job-icon"></FaAlignRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More Info
      </Link>
    </section>
  )
}

export default Jobs
