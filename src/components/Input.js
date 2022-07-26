import styles from 'styles/modules/Input.module.scss'

const Input = ({
	type,
	placeholder,
	value,
	changeHandler,
	input,
	title,
	name,
	step,
}) => {
	return (
		<div>
			{title && <h3 className={styles.title}>{title}</h3>}
			{input ? (
				<input
					className={styles.input}
					type={type}
					placeholder={`Enter ${placeholder}...`}
					value={value}
					name={name}
					onChange={changeHandler}
					step={step}
				/>
			) : (
				<textarea
					className={styles.input}
					placeholder={`Enter ${placeholder}...`}
					value={value}
					name={name}
					onChange={changeHandler}
				/>
			)}
		</div>
	)
}
export default Input

Input.defaultProps = {
	title: '',
	input: true,
	type: 'text',
	placeholder: '',
	value: '',
	step: '1',
	changeHandler: e => {
		console.log(e.target.value)
	},
}
