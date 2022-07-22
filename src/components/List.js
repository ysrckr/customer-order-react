import { FaTrashAlt } from 'react-icons/fa'
import styles from 'styles/modules/List.module.scss'
const List = ({ list, title, deleteHandler }) => {
	return (
		<div>
			{list.length > 0 && <h3 className={styles.title}>{title}</h3>}
			<ul className={styles.flex}>
				{list?.map(item => {
					return (
						<li
							key={item.id}
							className={styles.list}
							data-id={item.id}>
							<span className={styles.text}>{item.name}</span>
							<span
								className={styles.deleteButton}
								onClick={() => deleteHandler(item.id)}>
								<FaTrashAlt />
							</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default List
