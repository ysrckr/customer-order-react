import styles from 'styles/modules/Form.module.scss'
const Form = ({ children, submitHandler }) => {
	return (
		<form className={styles.form} onSubmit={submitHandler}>
			{children}
		</form>
	)
}
export default Form
