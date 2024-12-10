const app = Vue.createApp({
    data() {
        return {
            muebles: [] 
        };
    },
    methods: {
        cargarMuebles() {
            axios.get("https://www.course-api.com/react-store-products")
                .then(response => {
                    this.muebles = response.data.map(mueble => ({
                        ...mueble,
                        cantidad: 1,
                        selectedColor: null 
                        
                    }));
                    console.log(this.muebles);
                })
                .catch(error => {
                    console.error("Error al cargar los muebles:", error);
                });
        },
        aumentarCantidad(mueble) {
            mueble.cantidad++; // Incrementa la cantidad
        },
        disminuirCantidad(mueble) {
            if (mueble.cantidad > 1) {
                mueble.cantidad--; // Decrementa la cantidad, pero no baja de 1
            }
        },
        seleccionarColor(mueble, color) {
            mueble.selectedColor = color; 
        }
    },
    created() {
        this.cargarMuebles(); 
    }
});

app.mount("#contenedor");