class CustomFunctions {
	static capitalize(str) {
		const lowerStr = str.toLowerCase()
		return lowerStr.charAt(0).toUpperCase() + str.slice(1)
	}
}

export default CustomFunctions
