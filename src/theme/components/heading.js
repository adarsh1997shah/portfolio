const headingStyle = {
	variants: {
		section: {
			overflow: 'hidden',
			_before: {
				backgroundColor: 'green.400',
				content: `''`,
				display: 'inline-block',
				height: '1px',
				position: 'relative',
				verticalAlign: 'middle',
				width: '50%',
				right: '2',
				marginLeft: '-45%',
			},
			_after: {
				backgroundColor: 'green.400',
				content: `''`,
				display: 'inline-block',
				height: '1px',
				position: 'relative',
				verticalAlign: 'middle',
				width: '50%',
				left: '2',
				marginRight: '-50%',
			},
		},
	},
};

export default headingStyle;
