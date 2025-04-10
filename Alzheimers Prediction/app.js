let model; // To hold the TensorFlow.js model
let inputFields = []; // To store input elements dynamically created

// Load the TensorFlow.js model
async function loadModel() {
    model = await tf.loadLayersModel('./model.json'); // Path to the model (adjust if needed)
    console.log("Model Loaded");
    createInputFields();
}

// Create input fields dynamically based on model input shape
function createInputFields() {
    const inputLayer = model.inputShape; // Get input shape (example: [null, 3] for 3 features)
    const numInputs = inputLayer[1]; // Number of inputs expected by the model

    const container = document.getElementById("input-container");
    inputFields = []; // Clear the previous fields if any

    // Generate an input field for each expected input
    for (let i = 0; i < numInputs; i++) {
        const label = document.createElement("label");
        label.textContent = `Input ${i + 1}: `;
        container.appendChild(label);

        const input = document.createElement("input");
        input.type = "number";
        input.id = `input${i}`;
        input.placeholder = `Enter value for Input ${i + 1}`;
        container.appendChild(input);

        container.appendChild(document.createElement("br")); // Line break for readability

        inputFields.push(input);
    }
}

// Submit the prediction request
async function submitPrediction() {
    if (!model) {
        alert("Model is not loaded yet!");
        return;
    }

    const inputValues = inputFields.map(input => parseFloat(input.value));
    
    if (inputValues.some(value => isNaN(value))) {
        alert("Please fill all input fields with valid numbers.");
        return;
    }

    const tensorInput = tf.tensor([inputValues]); // Convert input to a tensor
    const prediction = model.predict(tensorInput); // Run the prediction

    // Display the result
    prediction.array().then(result => {
        const predictionResult = document.getElementById("predictionResult");
        const predictedValue = result[0][0]; // Adjust based on output shape

        if (predictedValue > 0.5) {
            predictionResult.textContent = "Predicted Risk: Positive (High Risk)";
        } else {
            predictionResult.textContent = "Predicted Risk: Negative (Low Risk)";
        }
    });
}

// Load the model when the page loads
window.onload = function() {
    loadModel();
};
