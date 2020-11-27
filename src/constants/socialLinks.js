import React from "react"
import {
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa"
import {
  AiFillRedditSquare,
  AiFillMinusSquare,
} from "react-icons/ai"

const data = [
  {
    id: 1,
    icon: <AiFillRedditSquare className="social-icon"></AiFillRedditSquare>,
    url: "https://www.reddit.com/user/JayD_reddit",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/jduarte4",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://www.github.com/JonathanDuarteGH",
  },
  {
    id: 4,
    icon: <AiFillMinusSquare className="social-icon"></AiFillMinusSquare>,
    url: "https://www.stackoverflow.com/users/11481722/elgnis3901",
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