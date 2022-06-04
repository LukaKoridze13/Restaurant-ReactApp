import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown } from 'react-bootstrap'
import './Dropdown.css'
export default function DropdownButton(props) {
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: '#f13c20', margin: "0 !important", padding: "0 !important" }}>
                Category: {props.text}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: '#f13c20' }}>
                <Dropdown.Item style={{ color: "white" }} className="dropdownItem" onClick={props.onClickOne}>{props.filterOne}</Dropdown.Item>
                <Dropdown.Item style={{ color: "white" }} className="dropdownItem" onClick={props.onClickTwo}>{props.filterTwo}</Dropdown.Item>
                <Dropdown.Item style={{ color: "white" }} className="dropdownItem" onClick={props.onClickThree}>{props.filterThree}</Dropdown.Item>
                <Dropdown.Item style={{ color: "white" }} className="dropdownItem" onClick={props.onClickFour}>{props.filterFour}</Dropdown.Item>
                <Dropdown.Item style={{ color: "white" }} className="dropdownItem" onClick={props.onClickFive}>{props.filterFive}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
