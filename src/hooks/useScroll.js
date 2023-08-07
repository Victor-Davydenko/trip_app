import { useEffect, useState } from 'react';

const useScroll = (ref, sliderData) => {
	const slider = ref.current;
	const [hasScroll, setHasScroll] = useState();
	const [slideWidthWithMargin, setSlideWidthWithMargin] = useState();
	useEffect(() => {
		let sliderWidth;
		let childrenWidth = 0;
		let hasScroll;
		if (slider) {
			sliderWidth = slider.offsetWidth;
			[...slider.children].forEach((child) => {
				childrenWidth += child.offsetWidth;
			});
			hasScroll = sliderWidth < childrenWidth;
			setHasScroll(hasScroll);
			console.log(hasScroll);

			const slide = slider.childNodes[0];
			const slideStyles = window.getComputedStyle(slide);
			const slideWidth = parseInt(slideStyles.width, 10);
			const slideMargin = parseInt(slideStyles.marginRight, 10);
			setSlideWidthWithMargin(slideMargin + slideWidth);
		}
	}, [slider, sliderData]);

	const onPreviousButtonClick = () => {
		slider.scrollBy({
			left: -slideWidthWithMargin,
			behavior: 'smooth',
		});
	};
	const onNextButtonClick = () => {
		slider.scrollBy({
			left: slideWidthWithMargin,
			behavior: 'smooth',
		});
	};

	return { onPreviousButtonClick, onNextButtonClick, hasScroll };
};

export default useScroll;
