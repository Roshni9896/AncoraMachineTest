$('.promotion-carousel.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    items: 3
})
$('#next').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
});

$('#prev').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
});

   // JavaScript for filtering images based on selected category
   document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('#galleryTabs .nav-link');
    const images = document.querySelectorAll('#galleryContent .col-md-3');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and add to the clicked one
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get selected category
            const category = button.getAttribute('data-category');

            // Filter images
            images.forEach(image => {
                const imageCategory = image.getAttribute('data-category');
                if (category === 'all' || category === imageCategory) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    });
});