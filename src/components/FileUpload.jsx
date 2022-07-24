import { useId } from 'react'
import styles from 'styles/modules/FileUpload.module.scss'
import { FaCameraRetro } from 'react-icons/fa'
import CustomFunctions from 'classes/CustomFunctions'

const FileUpload = ({ file, fileHandler, name }) => {
	const fileId = useId()
	let src
	if (file) src = URL.createObjectURL(file.file)
	return (
		<div className={styles.container}>
			{file ? (
				<div className={styles.image}>
					<img
						src={src}
						alt="file"
						object-fit="contain"
						height="100%"
						width="100%"
					/>
					<label htmlFor={fileId} className={styles.label}>
						<span className={styles.btn}>
							Choose a Different Image
						</span>
						<input
							className={styles.input}
							type="file"
							id={fileId}
							accept="image/png, image/jpg, image/jpeg"
							onChange={fileHandler}
							name={name}
						/>
					</label>
				</div>
			) : (
				<label htmlFor={fileId} className={styles.label}>
					Select an Image
					<FaCameraRetro className={styles.icon} />
					<input
						className={styles.input}
						type="file"
						id={fileId}
						accept="image/png, image/jpg, image/jpeg"
						onChange={fileHandler}
						name={name}
					/>
				</label>
			)}
			{file && (
				<span className={styles.text}>
					{CustomFunctions.capitalize(file.name)}
				</span>
			)}
		</div>
	)
}
export default FileUpload

FileUpload.defaultProps = {
	name: 'fileUpload',
}
