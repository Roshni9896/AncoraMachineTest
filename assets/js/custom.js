$('.promotion-carousel.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    responsive:{
        0:{
            items:1,
            dots: true,
            nav: false,
            autoplay: true
        },
        575:{
            dots: false,
            nav: true  ,
            autoplay: true 
        },
        768:{
            items:2
        },
        1500:{
            items:3
        }
    }
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

/*   Read More Functionlity */
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("read-more-btn");
    const moreContent = document.getElementById("more-content");

    button.addEventListener("click", function () {
        if (moreContent.style.display === "none") {
            moreContent.style.display = "block";
            button.innerText = "READ LESS";
        } else {
            moreContent.style.display = "none";
            button.innerText = "READ MORE";
        }
    });
});
// Code for equalising the card height

document.addEventListener("DOMContentLoaded", function () {
    function equalizeCardHeights() {
        const cardBodies = document.querySelectorAll(".card-body");
        let maxHeight = 0;

        // Reset heights to auto before calculating
        cardBodies.forEach(cardBody => {
            cardBody.style.height = "auto";
        });

        // Calculate the maximum height
        cardBodies.forEach(cardBody => {
            if (cardBody.offsetHeight > maxHeight) {
                maxHeight = cardBody.offsetHeight;
            }
        });

        // Set each card body to the maximum height
        cardBodies.forEach(cardBody => {
            cardBody.style.height = `${maxHeight}px`;
        });
    }

    // Run the function to equalize heights on initial load
    equalizeCardHeights();

    // Re-equalize on window resize
    window.addEventListener("resize", equalizeCardHeights);
});