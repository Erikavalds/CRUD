import { useEffect, useState } from 'react';
import useFetch from './Hooks/useFetch';
import Layout from './Layouts/Layout';
import AddEdit from './Components/AddEdit';
import UserList from './Components/UserList';
import Modal from './Components/Modal';
import './App.css';

const baseUrl = 'https://users-crud-api-81io.onrender.com/api/v1';

function App() {
	const [users, setUsers, loading] = useFetch();
	const [isOpen, setIsOpen] = useState(false);
	const [currentChild, setCurrentChild] = useState(null);

	useEffect(() => {
		readUsers();
	}, []);

	// create

	const createUser = (dataForm) => {
		setUsers({
			url: `${baseUrl}/users`,
			method: 'POST',
			body: dataForm,
		});
		setIsOpen(false);
	};

	// read
	const readUsers = () => {
		setUsers({ url: `${baseUrl}/users` });
	};

	// Update
	const updateUser = (dataForm, userId) => {
		setUsers({
			url: `${baseUrl}/users/${userId}`,
			method: 'PATCH',
			body: dataForm,
		});
		setIsOpen(false);
	};

	// Delete
	const deleteUser = (userId) => {
		setUsers({
			url: `${baseUrl}/users/${userId}`,
			method: 'DELETE',
		});
	};

	const openAdd = () => {
		setIsOpen(true);
		setCurrentChild(<AddEdit onSave={createUser} />);
	};

	const openEdit = (user) => {
		setIsOpen(true);
		setCurrentChild(<AddEdit user={user} onSave={updateUser} />);
	};
	return (
		<Layout>
			<header className="header">
				<div className="header__container">
					<h1 className="header__title">Usuarios</h1>

					<button className="header__button" onClick={openAdd}>
						Agregar usuario
					</button>
				</div>
			</header>

			{/* <AddEdit
					user={{
						first_name: 'Erika',
						last_name: 'Martinez',
						email: 'erika@example.com',
						password: '123456',
						birthday: '11-09-1997',
					}}
				/> */}

			<main className="container">
				{loading ? (
					<h2>Cargando...</h2>
				) : (
					<UserList users={users} openEdit={openEdit} deleteUser={deleteUser} />
				)}
			</main>

			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				{currentChild}
			</Modal>
		</Layout>
	);
}

export default App;
