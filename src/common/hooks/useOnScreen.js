import { useEffect, useState } from 'react';

function useOnScreen(ref, rootMargin = '0px') {
	// State and setter for storing whether element is visible
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const currentEl = ref.current;

		const observer = new IntersectionObserver(
			([entry]) => {
				// Update our state when observer callback fires
				setIntersecting(entry.isIntersecting);
			},
			{
				rootMargin,
				threshold: 0.5,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			observer.unobserve(currentEl);
		};
	}, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
	return isIntersecting;
}

export default useOnScreen;
