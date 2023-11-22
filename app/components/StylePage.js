const StylePage = () => {
	return (
		<>
			<h1 style={{ textAlign: "center" }}>Text</h1>
			<br />
			<h1>Heading 1</h1>
			<h2>Heading 2</h2>
			<h3>Heading 3</h3>
			<h4>Heading 4</h4>
			<h5>Heading 5</h5>
			<h6>Heading 6</h6>
			<p>Body</p>
			<p className="bold">Body Bold</p>
			<p className="caps">Body Caps</p>
			<a href="/">Link</a>
			<br />
			<h1 style={{ textAlign: "center" }}>Buttons</h1>
			<h4>Large</h4>
			<a className="button orange">Orange</a>
			<a className="button yellow">Yellow</a>
			<a className="button grey">Grey</a>
			<a className="button dark-grey">Dark Grey</a>
			<a className="button white">White</a>
			<h5>Outline</h5>
			<a className="button outline orange">Orange</a>
			<a className="button outline yellow">Yellow</a>
			<a className="button outline grey">Grey</a>
			<a className="button outline dark-grey">Dark Grey</a>
			<a className="button outline white">White</a>
			<h4>Small</h4>
			<a className="button small orange">Orange</a>
			<a className="button small yellow">Yellow</a>
			<a className="button small grey">Grey</a>
			<a className="button small dark-grey">Dark Grey</a>
			<a className="button small white">White</a>
			<h5>Outline</h5>
			<a className="button small outline orange">Orange</a>
			<a className="button small outline yellow">Yellow</a>
			<a className="button small outline grey">Grey</a>
			<a className="button small outline dark-grey">Dark Grey</a>
			<a className="button small outline white">White</a>
			<h1 style={{ textAlign: "center" }}>Spacing</h1>
		</>
	);
};

export default StylePage;
