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
				bottom: '0',
				left: '0',
				backgroundColor: 'green.300',
				transformOrigin: 'bottom right',
				transition: `transform 0.25s ease-out`,
			},
			_hover: {
				_after: { transform: `scaleX(1)`, transformOrigin: `bottom left` },
			},
		},
	},
};

export default linkStyles;
