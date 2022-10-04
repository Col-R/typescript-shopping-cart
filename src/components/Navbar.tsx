import React from 'react'
import {Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const buttonStyle = {
        width: "3rem",
        height: "3rem",
        background: "transparent",
        // position: "relative" as "relative", // idk why this works. typescript weirdness
        border: "none",
    }
    const counterStyle = {
        color: 'white',
        width: '1.5rem',
        height: '1.5rem',
        // position: 'absolute' as 'absolute',
        transform: 'translate(-25%, 10%)'
    }
    return (
        <NavbarBs sticky="top" className = "bg-white shadow-m mb-3">
            <Container>
                <Nav className = "me-auto"> {/* Margin on the right hand side of navbar to push everything after this class all the way to the right*/}
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button style = {buttonStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.559 7l4.701-4.702c.198-.198.459-.298.72-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.882zm12 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2zm-14 5c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3z"/></svg></Button>
                <div className="rounded-circle bg-primary d-flex justify-content-center align-items-center" style = {counterStyle}>0</div>
             </Container>
        </NavbarBs>
    )
}

export default Navbar