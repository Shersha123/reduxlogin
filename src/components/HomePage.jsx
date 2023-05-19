import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions';


function HomePage() {
    const loggedInUser = useSelector((state) => state.loggedInUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        // Dispatch an action to log out the user
        dispatch(logoutUser());
    };

    return (
        <div>
            <h2>Welcome, {loggedInUser.name}!</h2>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{loggedInUser.email}</td>
                        <td>{loggedInUser.name}</td>
                        <td>{loggedInUser.password}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default HomePage;
