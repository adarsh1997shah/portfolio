const linkStyles = {
	baseStyle: {
		_focus: { boxShadow: 'none' },
		_hover: {
			textDecoration: 'none',
		},
	},
	variants: {
		nav: {
			position: 'relative',
			_after: {
				content: `""`,
				position: 'absolute',
				width: '100%',
				transform: 'scaleX(0)',
				height: '2px',
				bottom: '-4px',
				left: '0',
				backgroundColor: 'green.300',
				transformOrigin: 'bottom right',
				transition: `transform 0.25s ease-out`,
			},
			_hover: {
				_after: { transform: `scaleX(1)`, transformOrigin: `bottom left` },
			},
		},
		outline: {
			border: '1.5px solid',
			borderColor: 'green.300',
			borderRadius: 'sm',
			padding: '2.5',
			display: 'inline-block',
			_hover: {
				backgroundColor: 'green.300',
				color: 'whiteAlpha.900',
			},
		},
	},
};

export default linkStyles;
