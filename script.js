document.getElementById("courier-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page from refreshing on form submit
    
    // Get form values
    const senderName = document.getElementById("senderName").value;
    const receiverName = document.getElementById("receiverName").value;
    const pickupAddress = document.getElementById("pickupAddress").value;
    const deliveryAddress = document.getElementById("deliveryAddress").value;
    const packageWeight = parseFloat(document.getElementById("packageWeight").value);
    
    // Assume simple fixed distance for demonstration, or input a distance field later
    const distance = 10; // Distance in kilometers (can be dynamic)
  
    // Pricing system
    const basePricePerKm = 2; // Price per kilometer
    const pricePerKg = 5; // Price per kg of package
    
    // Calculate total price
    const totalPrice = (distance * basePricePerKm) + (packageWeight * pricePerKg);
  
    // Create confirmation message with pricing
    const confirmationMessage = `
      <strong>Courier Details:</strong><br>
      Sender: ${senderName}<br>
      Receiver: ${receiverName}<br>
      Pickup Address: ${pickupAddress}<br>
      Delivery Address: ${deliveryAddress}<br>
      Package Weight: ${packageWeight} kg<br>
      <br><strong>Total Price:</strong> $${totalPrice.toFixed(2)}
    `;
  
    // Display confirmation message
    const confirmationElement = document.getElementById("confirmationMessage");
    confirmationElement.innerHTML = confirmationMessage;
    confirmationElement.style.display = "block";
    setTimeout(() => {
      confirmationElement.style.opacity = 1;
    }, 100); // Add fade-in effect
  
    // Clear form
    document.getElementById("courier-form").reset();
  });
  