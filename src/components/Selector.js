import styles from '../styles/modules/Selector.module.scss'
import CustomFunctions from '../classes/CustomFunctions'
const { capitalize } = CustomFunctions
const Selector = ({ type, selectionValue, options, getSelectionValue }) => {
	return (
		<div className={styles.flex}>
			<label htmlFor={type}>Choose a {capitalize(type)}</label>
			<select
				className={styles.selector}
				id={type}
				value={selectionValue}
				onChange={() => getSelectionValue}>
				<option disabled value="default">
					Select a {capitalize(type)}
				</option>
				{options.map(option => (
					<option key={option.id} value={option.id}>
						{capitalize(option.name)}
					</option>
				))}
			</select>
		</div>
	)
}
export default Selector
