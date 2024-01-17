function cargarDatos() {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        // Trabaja con los datos aquí
        console.log('Datos cargados:', data);
  
        // Ejemplo: Acceder a la información de Work
        console.log('Title:', data[0].title);
        console.log('Daily - Current:', data[0].timeframes.daily.current);
        console.log('Weekly - Previous:', data[0].timeframes.weekly.previous);
        // Puedes hacer lo mismo para los demás elementos del array data
      })
      .catch(error => {
        console.error('Error al cargar los datos:', error);
      });
  }
  
  cargarDatos();
  