/**
 * Hyde Hermit Studio - Shopify Theme JavaScript
 */

// Alpine.js CDN (lightweight reactive framework for carousel)
document.addEventListener('DOMContentLoaded', function() {
  // Load Alpine.js for carousel functionality
  const alpineScript = document.createElement('script');
  alpineScript.src = 'https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js';
  alpineScript.defer = true;
  document.head.appendChild(alpineScript);
  
  // Add to cart AJAX functionality
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const form = this.closest('form');
      const formData = new FormData(form);
      
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Update cart count
        updateCartCount();
        // Show success feedback
        this.textContent = 'Added!';
        setTimeout(() => {
          this.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="m1 1 4 4 2.68 11.55a2 2 0 0 0 2 1.45h9.72a2 2 0 0 0 2-1.45L23 6H6"></path>
            </svg>
            Add to Cart
          `;
        }, 1500);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  });
  
  // Update cart count function
  function updateCartCount() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const countElements = document.querySelectorAll('.cart-count');
        countElements.forEach(el => {
          if (cart.item_count > 0) {
            el.textContent = cart.item_count;
            el.style.display = 'flex';
          } else {
            el.style.display = 'none';
          }
        });
      });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Fade-in animation on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
  });
});
