document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------
    // 1. LURES CAROUSEL (SWIPER) - Final Responsive Settings
    // ----------------------------------------------
    const luresSwiper = new Swiper('.lures-swiper', {
        // RECOMMENDED: Pinakamaliit na screen (iPhone/Mobile) - 1 slide lang
        slidesPerView: 1, 
        spaceBetween: 10, 

        loop: true, 

        autoplay: {
            delay: 2000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        grabCursor: true, 

        // Responsive settings
        breakpoints: {
            // Kapag 480px pataas (Mas malaking phones/landscape)
            480: {
                slidesPerView: 2, // 2 columns
                spaceBetween: 10
            },
            // Kapag 768px pataas (iPad/Tablet)
            768: {
                slidesPerView: 3, // 3 columns
                spaceBetween: 20
            },
            // Idinagdag: Kapag 1024px pataas (Desktop/Macbook Pro)
            1024: {
                slidesPerView: 4, // 4 columns
                spaceBetween: 30
            }
        }
    });

    // ----------------------------------------------
    // 2. HERO SLIDESHOW (Carousel) - Inilipat dito mula sa HTML
    // ----------------------------------------------
    let slideIndex = 0;
    // Tiyaking may slides bago tawagin ang showSlides
    if (document.getElementsByClassName("slide").length > 0) {
        showSlides();
    }

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("slide");
        if (slides.length === 0) return; 
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        // Gamitin ang 3000ms (3 seconds) delay
        setTimeout(showSlides, 3000); 
    }

});





