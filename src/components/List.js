import { FaTrashAlt } from 'react-icons/fa'
import styles from 'styles/modules/List.module.scss'
const List = ({ list, title, deleteHandler }) => {
	return (
		<div>
			{list.length > 0 && <h3 className={styles.title}>{title}</h3>}
			<ul>
				{list?.map(item => {
					return (
						<div key={item.id} className={styles.backdrop}>
							<li className={styles.list}>
								{item.name}
								<span
									data-id={item.id}
									onClick={e => console.log(e.target)}
									className={styles.deleteButton}>
									<FaTrashAlt />
								</span>
							</li>
						</div>
					)
				})}
			</ul>
		</div>
	)
}
export default List
