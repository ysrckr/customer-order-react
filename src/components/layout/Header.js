import { Link } from 'react-router-dom'
import styles from 'styles/modules/Header.module.scss'

const Header = () => {
	return (
		<header className={styles.container}>
			<div className={styles.logo}>
				<h1>
					<Link to="/">Customer Order</Link>
				</h1>
			</div>
			<nav>
				<ul className={styles.nav}>
					<li>
						<Link to="/vendor/create">Create Vendor</Link>
					</li>
					<li>
						<Link to="/customer/create">Create Customer</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
export default Header
