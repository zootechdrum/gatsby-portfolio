import React from "react"
import { FaFacebookSquare, FaLinkedin, GoMarkGithub } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/profile.php?id=100003995021026",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/cesar-gomez-zootechnic/",
  },
  {
    id: 3,
    icon: <GoMarkGithub className="social-icon"></GoMarkGithub>,
    url: "https://github.com/zootechdrum",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
