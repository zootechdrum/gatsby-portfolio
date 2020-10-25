import React from "react"
import { Link } from "gatsby"
import Resume from "./assets/resume.pdf"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },

  {
    id: 3,
    text: "contact",
    url: "/contact/",
  },
  {
    id: 4,
    text: "Resume",
    url: { Resume },
  },
]

const tempLinks = data.map(link => {
  return link.id === 4 ? (
    <li key={link.id}>
      <a href={Resume}>Resume</a>
    </li>
  ) : (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
