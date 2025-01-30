document.addEventListener('DOMContentLoaded', () => {
  // Select all the (addition) and (minus) buttons 
    const minusBtns = document.querySelectorAll('.decrement');
    const addBtns = document.querySelectorAll('.increment');
  
  //Select the elements where total itemcount and cost will be displayed 
    const totalItemsEl = document.getElementById('item-count');
    const totalCostEl = document.getElementById('total-price');
  
  //Sleect all the cart rows (items) in the cart 
    const cartRows = document.querySelectorAll('.cart-item');

  //Function to update total number of items and cost in the cart 
    function updateSummary() {
        let totalItems = 0; // Initialize to 0 
        let totalCost = 0;

      //Loop through each cart row 
        cartRows.forEach(row => {
          //Getting the number of items and price of item 
            const quantity = parseInt(row.querySelector('input[type="number"]').value);
            const price = parseFloat(row.querySelector('.price').textContent.replace('₱', ''));

          // Add quantity to total items and solve for total cost 
            totalItems += quantity;
            totalCost += quantity * price;
        });

      // Update the displayed total item count and cost 
        totalItemsEl.textContent = totalItems;
        totalCostEl.textContent = totalCost.toFixed(2);
    }

  // Event listener for each minus button 
    minusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const quantityInput = e.target.nextElementSibling;
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantityInput.value = quantity - 1;
                updateSummary();
            }
        });
    });

    // Event listener for each add button 
    addBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const quantityInput = e.target.previousElementSibling;
            let quantity = parseInt(quantityInput.value);
            quantityInput.value = quantity + 1;
            updateSummary();
        });
    });
  
  // Call to display the total values on page 
    updateSummary();
});

