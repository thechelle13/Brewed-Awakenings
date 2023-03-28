import { getProducts } from "./database.js"


// add an event listener click event here to display price

const products = getProducts()

// add event listener here to produce product and price pop up
document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
        if (itemClicked.id.startsWith("product")) {

          
            const [,productsId] = itemClicked.id.split("--")

            /*
                Now that you have the primary key of a walker object,
                find the whole object by iterating the walkers array.
            */
            for (const product of products) {

                /*
                    use Walkers & RegisteredPet as reference to build logic for click output
                */
                if (product.id === parseInt(productsId)) {
                    //const clickedPrices = filterProductsByPrice(price)
                    //const product = assignedProductsNames(products)

                    window.alert(`${product.name} costs ${product.price}`)
                }
            }
        }
    }
)


export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

