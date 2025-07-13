"use client"
import Navbar from "./Navbar"
import NavbarAuthenticated from "./navbar-user"

export default function NavbarWrapper(){

    

    const isAuthenticated = false
    const isLoading = false 
    return (
        <>
        {
            isLoading? <p>Loading...</p>: isAuthenticated? <NavbarAuthenticated/>:<Navbar/>
        }
       
        </>
    )
}