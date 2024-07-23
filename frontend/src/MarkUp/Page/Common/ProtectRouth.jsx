import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Context/FakeAuthContext'

function ProtectRouth({ children }) {
    const { isAuthenticated } = useAuth()
    const navigator = useNavigate()
    useEffect(
        function () {
            if (!isAuthenticated)
                navigator('/')
        }, [isAuthenticated, navigator])
    return isAuthenticated ? children : ""
}
export default ProtectRouth