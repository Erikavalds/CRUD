import { IoGiftOutline } from 'react-icons/io5';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaTrashAlt } from 'react-icons/fa';
import './UserCard.css';

function UserCard({ user, openEdit, deleteUser }) {
	return (
		<div className="card">
			<h3 className="card__name">
				{user?.first_name} {user?.last_name}
			</h3>
			<div className="card__info">
				<div>
					<span className="card__label">Correo</span>
					{user?.email}
				</div>
				<div>
					<span className="card__label">Cumpleaños</span>
					<span className="card__data">
						<IoGiftOutline className="icon--gift" /> {user?.birthday}
					</span>
				</div>
			</div>
			<div className="card__btns">
				<button
					className=" btn btn--delete"
					onClick={() => deleteUser(user?.id)}
				>
					<FaTrashAlt />
				</button>
				<button className="btn btn--edit" onClick={() => openEdit(user)}>
					<FaPenToSquare />
				</button>
			</div>
		</div>
	);
}

export default UserCard;
