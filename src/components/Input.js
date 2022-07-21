import styles from 'styles/modules/Input.module.scss'

const Input = ({ type, placeholder, value, changeHandler }) => {
	return (
		<div>
			<input
				className={styles.input}
				type={type}
				placeholder={`Enter ${placeholder}...`}
				value={value}
				onChange={changeHandler}
			/>
		</div>
	)
}
export default Input

Input.defaultProps = {
	type: 'text',
	placeholder: '',
	value: '',
	changeHandler: (e) => {
		console.log(e.target.value)
	},
}