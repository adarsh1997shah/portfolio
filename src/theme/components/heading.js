const headingStyle = {
	variants: {
		section: {
			overflow: 'hidden',
			display: 'flex',
			alignItems: 'center',

			_before: {
				backgroundColor: 'green.400',
				content: `''`,
				display: 'inline-block',
				height: '1px',
				position: 'relative',
				verticalAlign: 'middle',
				width: '5%',
				right: '2',
			},
			_after: {
				backgroundColor: 'green.400',
				content: `''`,
				display: 'inline-block',
				height: '1px',
				position: 'relative',
				verticalAlign: 'middle',
				flex: 1,
				left: '2',
			},
		},
	},
};

export default headingStyle;
