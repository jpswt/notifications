import { Server } from 'socket.io';

const io = new Server({
	cors: {
		origin: 'http://localhost:3000',
	},
});

let users = [];

const addNewUser = (username, socketId) => {
	!users.some((user) => user.username === username) &&
		users.push({ username, socketId });
};

const removeUser = (socketId) => {
	users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
	return users.find((user) => user.username === username);
};

io.on('connection', (socket) => {
	socket.on('connection', () => {
		console.log(socket.id);
	});

	socket.on('newUser', (username) => {
		addNewUser(username, socket.id);
	});

	socket.on('sendNotification', ({ senderName, receiverName, type }) => {
		const receiver = getUser(receiverName);
		io.to(receiver.socketId).emit('getNotification', {
			senderName,
			type,
		});
	});

	socket.on('sendText', ({ senderName, receiverName, text }) => {
		const receiver = getUser(receiverName);
		io.to(receiver.socketId).emit('getText', {
			senderName,
			text,
		});
	});

	socket.on('disconnect', () => {
		removeUser(socket.id);
	});
});

io.listen(8080);
