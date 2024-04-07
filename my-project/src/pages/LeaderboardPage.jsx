import React from 'react';

const LeaderboardPage = () => {
  const generateFakeData = () => {
    const users = [];
    for (let i = 1; i <= 10; i++) {
      users.push({
        id: i,
        username: `User ${i}`,
        points: Math.floor(Math.random() * 1000), // Random points between 0 and 1000
      });
    }
    return users;
  };

  const leaderboardData = generateFakeData();

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-950 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Leaderboard</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-100 text-gray-800">
              <tr>
                <th className="py-2 px-4">Rank</th>
                <th className="py-2 px-4">Username</th>
                <th className="py-2 px-4">Points</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {leaderboardData.map((user, index) => (
                <tr key={user.id} className={index % 2 === 0 ? 'bg-blue-50' : ''}>
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{user.username}</td>
                  <td className="py-2 px-4">{user.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
