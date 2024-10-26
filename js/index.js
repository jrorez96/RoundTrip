
    let language = 'es';

    const texts = {
      en: {
        homeLink: "Home",
        servicesLink: "Services",
        vehiclesLink: "Vehicles",
        reviewsLink: "Reviews",
        contactLink: "Contact",
        heroTitle: "Quality vehicles, unforgettable experiences.",
        heroSubtitle: "The trip you imagine, in the car you need",
        categoryLabel: "Vehicle Category",
        pickupLocationLabel: "Pick-up Location",
        dropoffLocationLabel: "Drop-off Location",
        pickupDateLabel: "Pick-up Date",
        dropoffDateLabel: "Drop-off Date",
        searchBtn: "Search Vehicle",
      },
      es: {
        homeLink: "Inicio",
        servicesLink: "Servicios",
        vehiclesLink: "Vehículos",
        reviewsLink: "Reseñas",
        contactLink: "Contacto",
        heroTitle: "Vehículos de calidad, experiencias inolvidables",
        heroSubtitle: "El viaje que imaginas, en el auto que necesitas",
        categoryLabel: "Categoría de Vehículos",
        pickupLocationLabel: "Lugar de Recogida",
        dropoffLocationLabel: "Lugar de Entrega",
        pickupDateLabel: "Fecha de Recogida",
        dropoffDateLabel: "Fecha de Devolución",
        searchBtn: "Buscar Vehículo",
      }
    };

    function toggleLanguage() {
      language = language === 'es' ? 'en' : 'es';
      document.getElementById('home-link').textContent = texts[language].homeLink;
      document.getElementById('services-link').textContent = texts[language].servicesLink;
      document.getElementById('vehicles-link').textContent = texts[language].vehiclesLink;
      document.getElementById('reviews-link').textContent = texts[language].reviewsLink;
      document.getElementById('contact-link').textContent = texts[language].contactLink;
      document.getElementById('hero-title').textContent = texts[language].heroTitle;
      document.getElementById('hero-subtitle').textContent = texts[language].heroSubtitle;
      document.getElementById('category-label').textContent = texts[language].categoryLabel;
      document.getElementById('pickup-location-label').textContent = texts[language].pickupLocationLabel;
      document.getElementById('dropoff-location-label').textContent = texts[language].dropoffLocationLabel;
      document.getElementById('pickup-date-label').textContent = texts[language].pickupDateLabel;
      document.getElementById('dropoff-date-label').textContent = texts[language].dropoffDateLabel;
      document.getElementById('search-btn').textContent = texts[language].searchBtn;
    }
