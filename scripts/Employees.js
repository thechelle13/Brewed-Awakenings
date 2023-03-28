
// this is an import line designed to allow access to information that was built on another page
import { getEmployees, getOrders } from "./database.js"


// these two created var are here to activate or invoke the code or function that exists on another page.  on botton
const employees = getEmployees()
const orders = getOrders()




// add event listener here to produce employee and orders made pop up
//this is saying the function or logic will be activated by a click
document.addEventListener(
    "click", 
    (clickEvent) => {
//this is a var to set the click to this place this function or logic 
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {

            // this allows me to gather information from more than one array
            let [, primaryKey] = itemClicked.id.split("--")


            // these two functions are split so that each can gather the information needed to produce desired information output when clicked
            let matchingEmployee = null
            //function to get the employee name that is clicked
                for (let employee of employees) {
                    if (employee.id === parseInt(primaryKey)) {
                            matchingEmployee = employee
                        }   
                    }

            let matchingOrder = null  
            //function to get the orders of employee and    
                for (let order of orders) {
                    if (order.employeeId === matchingEmployee.id)  {
                            matchingOrder = order
                        }
                    }  
                    // a conclusion that brings the logic above together to produce the output on the event. this points to the data i want to display after a click  
                    window.alert(`${matchingEmployee.name} has made ${matchingOrder.employeeId}.`)
            }
            
            
        }
    
)



// this was created to build the employee list, both the data and what it appears like on the display 
export const Employees = () => {
    let html = "<ul>"
//function that pulls data from array located in the database.  by using the .dot I am able to access the information inside the array.
    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"
// this is an output call to the logic
    return html
}

