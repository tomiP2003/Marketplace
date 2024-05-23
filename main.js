const app = Vue.createApp({
    data() {
        return {
            titulo: "Marketplace",
            cart: 0,
            producto: "Globos",
            imagenPrincipal: "imagenes/globoRojo.jpg",
            imagenOriginal: "imagenes/globoRojo.jpg",
            stock: 0,
            descripcion: ["Todo tipo de globos", "Todos los colores", "Todos los tipos"],
            variantes: [
                { id: "123", color: "Bordo", imagen: "imagenes/globoVerde.jpg" },
                { id: "456", color: "Fucsia", imagen: "imagenes/globoFucsia.jpg" }
            ]
        };
    },
    methods: {
        AddToCart() {
            this.cart += 1;
        },
        updateImage(variantImage) {
            this.imagenPrincipal = variantImage;
        },
        resetImage() {
            this.imagenPrincipal = this.imagenOriginal;
        }
    }
});

app.mount("#app")