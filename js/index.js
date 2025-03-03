// Función para obtener las categorías desde el API y llenar el select
function loadCategories() {
  fetch("https://localhost:7184/Categoria")
    .then(response => response.json())
    .then(data => {
      const categorySelect = document.getElementById("category");
      categorySelect.innerHTML = '<option value="">Selecciona una categoría</option>'; // Reset options
      
      data.forEach(category => {
        const option = document.createElement("option");
        option.value = category.idCategoria; // Ajusta según la estructura de la respuesta del API
        option.textContent = category.categoria; // Ajusta según la estructura de la respuesta del API
        categorySelect.appendChild(option);
      });
    })
    .catch(error => console.error("Error al obtener categorías:", error));
}

// Cargar las categorías cuando la página haya cargado completamente
document.addEventListener("DOMContentLoaded", loadCategories);

document.getElementById("search-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Evita el envío del formulario

  // Captura los valores del formulario
  const category = document.getElementById("category").value;
  const pickupLocation = document.getElementById("pickup-location").value;
  const dropoffLocation = document.getElementById("dropoff-location").value;
  const pickupDate = document.getElementById("pickup-date").value;
  const dropoffDate = document.getElementById("dropoff-date").value;

  // Guarda los valores en localStorage
  localStorage.setItem("pickupLocation", pickupLocation);
  localStorage.setItem("dropoffLocation", dropoffLocation);
  localStorage.setItem("pickupDate", pickupDate);
  localStorage.setItem("dropoffDate", dropoffDate);

  // Realiza el llamado al API solo con la categoría
  fetch(`https://localhost:7184/Vehiculos/categoria?categoria=${category}`)
    .then(response => response.json())
    .then(data => {
      console.log("Datos recibidos del API:", data); // Verificar datos

      // Guarda la información del vehículo devuelta por el API en localStorage
      localStorage.setItem("vehicleData", JSON.stringify(data));
      console.log("Datos guardados en localStorage:", localStorage.getItem("vehicleData")); // Verificar almacenamiento
      
      // Redirige a la página de resultados
      window.location.href = "vehiculos.html";
    })
    .catch(error => console.error("Error al obtener vehículos:", error));
});
