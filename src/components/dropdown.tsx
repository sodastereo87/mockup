import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import dropCSS from './dropdown.module.css'

function DropDown() {
  return (
    <Dropdown className={dropCSS.menu}>
      <Dropdown.Toggle variant="" id="dropdown-basic" >
      Select Import Name:
      </Dropdown.Toggle>

      <Dropdown.Menu className={dropCSS.menu2}>
        <Dropdown.Item href="#/action-1">Name 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Name 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Name 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;