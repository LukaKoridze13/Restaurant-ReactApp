import React from 'react'
import { Dropdown } from 'react-bootstrap'
export default function PriceFilter(props) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: '#f13c20', margin: "0 !important", padding: "0 !important" }}>
                Price: {props.sort}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: '#f13c20' }}>
                <Dropdown.Item style={{ color: "white" }} className="dropdownItem" onClick={() => { props.func("No Sort")}} >No Sort</Dropdown.Item>
                <Dropdown.Item style={{ color: "white" }} className="dropdownItem" onClick={() => {props.func("LOW to HIGH")}}>LOW to HIGH</Dropdown.Item>
                <Dropdown.Item style={{ color: "white" }} className="dropdownItem" onClick={() => {props.func("HIGH to LOW")}}>HIGH to LOW</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
