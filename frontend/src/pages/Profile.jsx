import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('auth');
    if (token) {
      const { userId } = JSON.parse(atob(token.split('.')[1]));
      axios.get(`https://backend-ffai.vercel.app/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching user data:", err);
        setError("Failed to load user data.");
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-40 mb-40 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-4">User Profile</h1>
      <div className="mb-4">
        <strong>Email:</strong> {userData ? userData.email : "N/A"}
      </div>
      <h2 className="text-xl font-semibold mb-2">Ratings</h2>
      {userData && userData.ratings && userData.ratings.length > 0 ? (
        userData.ratings.map((rating, index) => (
          <div key={index} className="border p-2 mb-2 rounded">
            <p><strong>Rating:</strong> {rating.rating}</p>
            <p><strong>Comment:</strong> {rating.comment}</p>
            <p><strong>Date:</strong> {new Date(rating.date).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No ratings available.</p>
      )}
    </div>
  );
};

export default Profile;