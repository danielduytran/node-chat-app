const users = [];

const addUser = ({ id, username, room }) => {
    // Clean data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate data
    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    // Validate username and room
    const existingUser = users.find((user) => {
        return user.username === username && user.room === room;
    })

    if (existingUser) {
        return {
            error: 'Username is in use'
        }
    }

    // Add user
    const user = { id, username, room };
    users.push(user);
    return { user };
};

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    const removedUser = users.splice(index, 1)[0];
    return removedUser;
}

const getUser = (id) => {
    const existingUser = users.find((user) => user.id === id);
    return existingUser;
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    const usersInRoom = users.filter((user) => user.room === room);
    return usersInRoom;
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}