import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import updateApi from '../api/updateApi';
import { useUser } from '../contextAPI/userContext';

const UserScreen = () => {
  const location = useLocation();
  const { user, setUser } = useUser(); 
  const token = localStorage.getItem("token");
  console.log(user)

  const cacheUser = JSON.parse(localStorage.getItem("userData")) || {};
  // console.log(cacheUser.name)

  // Use user data from the context API
  const [email, setEmail] = useState(cacheUser.email || user.email || 'User@gmail.com');
  const [userType, setUserType] = useState(cacheUser.UserType || user.userType || 'Default');
  const [name, setName] = useState(cacheUser.name || user.name || 'User');

  const [isEditing, setIsEditing] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const handleInputChange = () => {
    setIsEdited(true);
  };

  const handleUpdate = () => {
    updateApi("http://localhost:8000/users/profile/", { Name:name, Email:email, UserType:userType }, token)
      .then(res => {
        // console.log("response is ", res);
        alert('Profile updated!');
        setUser({
          ...user,
          name,
          email,
          userType,
        });
        setIsEditing(false);
        setIsEdited(false);
      });
  };

  return (
    <div className='user-container'>
      {token ? (
        <>
          <div className="profile-container">
            <div className="profile">
              <div className="user-image">
                <img src="../src/assets/user.png" alt="User" />
              </div>

              <div className="user-details">
                <div className='profile-heading-container'>
                  <h1 className='profile-heading'>
                    <label>Name: </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          handleInputChange();
                        }}
                      />
                    ) : (
                      <span>{name}</span>
                    )}
                  </h1>
                </div>

                <div>
                  <label>Email: </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        handleInputChange();
                      }}
                    />
                  ) : (
                    <span>{email}</span>
                  )}
                </div>

                <div>
                  <label>User Type: </label>
                  {isEditing ? (
                    <select
                      value={userType}
                      onChange={(e) => {
                        setUserType(e.target.value);
                        handleInputChange();
                      }}
                    >
                      <option value="buyer">Buyer</option>
                      <option value="admin">Admin</option>
                    </select>
                  ) : (
                    <span>{userType}</span>
                  )}
                </div>

                <div className="button-container">
                  {!isEditing ? (
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                  ) : (
                    <>
                      <button onClick={handleUpdate} disabled={!isEdited}>Update</button>
                      <button onClick={() => {
                        setIsEditing(false);
                        setIsEdited(false);
                      }}>Cancel</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <h2>Please log in to view your profile.</h2>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default UserScreen;
