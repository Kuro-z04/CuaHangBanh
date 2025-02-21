// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = [
        {
            title: "Order Cakes Online",
            subtitle: "Upto 80% Off",
            image: "Image/cake1.jpg",
            category: "cupcake"
        },
        {
            title: "Delicious Cookies",
            subtitle: "Freshly Baked",
            image: "Image/cake2.jpg",
            category: "cookies"
        },
        {
            title: "Tasty Bread",
            subtitle: "Healthy and Fresh",
            image: "Image/cake3.jpg",
            category: "bread"
        },
        {
            title: "Dark Chocolate",
            subtitle: "Rich and Smooth",
            image: "Image/cake4.jpg",
            category: "chocolate"
        },
        {
            title: "Wheat Products",
            subtitle: "Nutritious and Tasty",
            image: "Image/cake5.jpg",
            category: "wheat"
        }
    ];

    const products = [
        {
            title: "Cupcake Cam",
            subtitle: "$25",
            image: "Image/cupcakeCam.jpg",
            category: "cupcake"
        },
        {
            title: "Cupcake Oreo",
            subtitle: "$25",
            image: "Image/cupcakeOreo.jpg",
            category: "cupcake"
        },
        {
            title: "Chocolate chip Cookie",
            subtitle: "$15",
            image: "Image/chocolatechip.png",
            category: "cookies"
        },
        {
            title: "Cookie bơ đậu phộng",
            subtitle: "$15",
            image: "Image/cookiesbodauphong.png",
            category: "cookies"
        },
        {
            title: "Corn Bread",
            subtitle: "$10",
            image: "Image/Cornbread.jpg",
            category: "bread"
        },
        {
            title: "Challah Bread",
            subtitle: "$10",
            image: "Image/ChallahBread.jpg",
            category: "bread"
        },
        {
            title: "Marou Chocolate",
            subtitle: "$20",
            image: "Image/MarouChocalate.jpg",
            category: "chocolate"
        },
        {
            title: "Dark Figo Chocolate",
            subtitle: "$20",
            image: "Image/DarkFigoChocolate.jpg",
            category: "chocolate"
        },
        {
            title: "Pastry Flour",
            subtitle: "$12",
            image: "Image/Pastryflour.jpg",
            category: "wheat"
        },
        {
            title: "Self-Rising Flour",
            subtitle: "$12",
            image: "Image/SelfRisingFlour.jpg",
            category: "wheat"
        }
    ];

    let currentSlide = 0;
    let currentProduct = 0;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.getElementById('hero-image');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const buyNowBtn = document.getElementById('buy-now');

    function updateSlide() {
        const slide = slides[currentSlide];
        heroImage.src = slide.image;
        heroImage.setAttribute('data-category', slide.category);
    }

    function updateProduct() {
        const product = products[currentProduct];
        heroImage.src = product.image;
        heroImage.setAttribute('data-category', product.category);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }

    function nextProduct() {
        currentProduct = (currentProduct + 1) % products.length;
        updateProduct();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    }

    function prevProduct() {
        currentProduct = (currentProduct - 1 + products.length) % products.length;
        updateProduct();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    setInterval(nextSlide, 5000); // Tự động chuyển đổi hình ảnh sau mỗi 5 giây

    buyNowBtn.addEventListener('click', function() {
        const category = heroImage.getAttribute('data-category');
        window.location.href = `shop.html#${category}`;
    });

    updateSlide();

    prevBtn.addEventListener('click', prevProduct);
    nextBtn.addEventListener('click', nextProduct);

    setInterval(nextProduct, 5000); // Tự động chuyển đổi sản phẩm sau mỗi 5 giây

    buyNowBtn.addEventListener('click', function() {
        const category = heroImage.getAttribute('data-category');
        window.location.href = `shop.html#${category}`;
    });

    updateProduct();

    const categoryCards = document.querySelectorAll('.category-card');
    const productGrid = document.getElementById('product-grid');
    const allProducts = productGrid.innerHTML;

    // Lưu trữ các sản phẩm ban đầu trong một đối tượng
    const productsByCategory = {};
    document.querySelectorAll('.product-card').forEach(product => {
        const category = product.getAttribute('data-category');
        if (!productsByCategory[category]) {
            productsByCategory[category] = [];
        }
        productsByCategory[category].push(product.outerHTML);
    });

    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            productGrid.innerHTML = productsByCategory[category].join('');
        });
    });

    document.getElementById('see-all-products').addEventListener('click', function() {
        productGrid.innerHTML = allProducts;
    });
});