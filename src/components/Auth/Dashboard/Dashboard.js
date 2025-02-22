import React, { useState } from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './Dashboard.css'
import CustomerDashboard from "./CustomerDashboard"
import AdminDashboard from "./AdminDashboard"


export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const [isAdmin, setIsAdmin] = useState(amBoss())
    
    function amBoss() {
        return currentUser.email==='steveplayshorn@gmail.com'||currentUser.email==='samualljackson@gmail.com'
    }
    const history = useHistory


    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("log out failed")
        }
    }

    return (
        <div className="auth-content">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong>{currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
                <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogout}>Log Out</Button>
                </div>
            </Card>
            {isAdmin ? <AdminDashboard /> : <CustomerDashboard />}
        </div>
    )
}
