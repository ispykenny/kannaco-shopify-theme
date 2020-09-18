export default function() {
	const accordionParent = $('.accordion-k__item');
	const accordion = $('.accordion-k__item h3');
	const speed = 200;
	
	
	const toggleFaq = event => {
		$(event.currentTarget).parents('.accordion-k__item').find('.accordion-k__answer').slideToggle(speed);
	}

	if(accordionParent) {
		accordionParent.eq(0).find('.accordion-k__answer').slideDown();
	}
	accordion.on('click', event => toggleFaq(event))
}