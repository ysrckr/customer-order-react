import CustomFunctions from '../classes/CustomFunctions'
const { capitalize } = CustomFunctions
const Selector = ({ type, selectionValue, options, getSelectionValue }) => {
	return (
		<div>
			<label htmlFor={type}>Choose a {capitalize(type)}</label>
			<select
				id={type}
				value={selectionValue}
				onChange={() => getSelectionValue}>
				<option disabled defaultValue={'default'}>
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
