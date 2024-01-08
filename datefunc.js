function displayCurrentDateTime() {
    // Days of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Get current date and time
    const currentDate = new Date();
  
    // Get day of the week
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
  
    // Get current time components
    let hours = currentDate.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const minutes = currentDate.getMinutes();
  
    // Display the formatted output
    console.log(`Today is: ${dayOfWeek}.`);
    console.log(`Current time is: ${hours}:${minutes} ${ampm}`);
  }
  
  // Call the function to display current date and time
  displayCurrentDateTime();

  