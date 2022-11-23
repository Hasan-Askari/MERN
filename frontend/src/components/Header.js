import propTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add'/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}


// CSS in JS
// const Style = {
//   color: 'red',
//   backgroundColor: "black",
//   width: "30px"
// }
export default Header