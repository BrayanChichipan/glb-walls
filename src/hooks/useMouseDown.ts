import { RefObject, useEffect } from 'react';

interface Props {
	elRef: RefObject<HTMLElement>;
	onClickInside?: (e: MouseEvent) => void;
	onClickOutside?: (e: MouseEvent) => void;
}

export const useMouseDown = ({
	elRef,
	onClickInside,
	onClickOutside,
}: Props) => {
	const handleMouseDown = (e: MouseEvent) => {
		if (elRef.current != null && !elRef.current.contains(e.target as Node)) {
			onClickOutside?.(e);
			return;
		}

		onClickInside?.(e);
	};

	useEffect(() => {
		window.addEventListener('mousedown', handleMouseDown);

		return () => {
			window.removeEventListener('mousedown', handleMouseDown);
		};
	}, []);
};
