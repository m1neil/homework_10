function Button(props) {
	const { children } = props

	return (
		<button className="button" {...props}>
			<span>{children}</span>
		</button>
	)
}

export default Button
