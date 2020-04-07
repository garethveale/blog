import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import "./layout.css"
import useDarkMode from "use-dark-mode"
import Switch from "react-switch"
import { rhythm, scale } from "../utils/typography"
import sunIcon from "../assets/sun-icon.svg"
import moonIcon from "../assets/moon-icon.svg"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(true)

  return (
    <Switch
      onChange={darkMode.toggle}
      checked={darkMode.value}
      onColor="#222"
      offColor="#333"
      checkedIcon={<img src={sunIcon} alt="sun icon" /> }
      uncheckedIcon={<img src={moonIcon} alt="moon icon" />}
      boxShadow="0 0 2px 3px #95E06C"
      activeBoxShadow="0 0 2px 3px #55D6BE"
    />
  )
}

const Layout = ({ location, title, children, pageWidth }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  let headerWrapper
  let footer

  if (location.pathname === rootPath) {
    header = (
      <div>
        <h1
          style={{
            ...scale(1.5),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <Bio location={location} />
        <a href='https://github.com/garethiv' target="_blank" rel="noopener noreferrer">github</a> • 
        <a href='https://www.linkedin.com/in/garethveale/' target="_blank" rel="noopener noreferrer"> linkedin</a> • 
        <a href='https://twitter.com/garethveale' target="_blank" rel="noopener noreferrer"> twitter</a>
      </div>
    )
    headerWrapper = (
      <header style={{ 
        flexDirection: 'column', 
        display: 'flex', 
        marginBottom: rhythm(1.5),
        marginTop: '50%',
        alignItems: 'center',
        justifyContent: 'center',}}
      >
        {header}
        <DarkModeToggle />
      </header>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
    headerWrapper = (
      <header style={{ 
        flexDirection: 'row', 
        display: 'flex',
        justifyContent: 'space-between' }}
      >
        {header}<DarkModeToggle />
      </header>
    )
    footer = (
      <div
        style ={{

        }}
      >
        <p>
          <Link to={`https://github.com/garethiv`}>github</Link> • 
          <Link to={`https://www.linkedin.com/in/garethveale/`}>linkedin</Link> • 
          <Link to={`https://twitter.com/garethveale`}>twitter</Link>
        </p>
      </div>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: pageWidth ? rhythm(pageWidth) : rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {headerWrapper}
      <main>{children}</main>
      <footer>
        {footer}
      </footer>
    </div>
  )
}

export default Layout
