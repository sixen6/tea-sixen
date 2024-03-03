// Helper function to find the sum of all elements in an array
function calculateArraySum(array) {
    if (!Array.isArray(array) || array.length === 0) {
      throw new Error("Input must be a non-empty array");
    }
  
    return array.reduce((sum, num) => sum + num, 0);
  }
  
  // Helper function to remove duplicate elements from an array
  function removeDuplicates(array) {
    if (!Array.isArray(array)) {
      throw new Error("Input must be an array");
    }
  
    return [...new Set(array)];
  }
  
  // Demo using the helper functions
  try {
    const numbersArray = [3, 7, 2, 5, 7, 8, 2, 9, 3];
    const arraySum = calculateArraySum(numbersArray);
    console.log("Array Sum:", arraySum);
  
    const uniqueNumbers = removeDuplicates(numbersArray);
    console.log("Unique Numbers:", uniqueNumbers);
  } catch (error) {
    console.error("Error:", error.message);
  }
  