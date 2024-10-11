document.getElementById('experimentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect user inputs
    const age = document.getElementById('age').value;
    const interest = document.getElementById('interest').value;
    const materials = Array.from(document.querySelectorAll('input[name="material"]:checked')).map(el => el.value);

    let experiment = generateExperiment(age, interest, materials);
    displayExperiment(experiment);
});

// Function to generate an experiment based on user input
function generateExperiment(age, interest, materials) {
    let experiment;

    // Experiment ideas based on interest and materials
    const experimentIdeas = {
        chemistry: {
            vinegar: "Mix vinegar with baking soda to create a bubbling chemical reaction!",
            'food coloring': "Create colorful explosions by mixing food coloring with vinegar!"
        },
        physics: {
            magnets: "Use magnets to explore the invisible forces of magnetism!",
            balloons: "Build a simple balloon rocket and discover the principles of thrust and air pressure!"
        },
        biology: {
            'food coloring': "Watch how food coloring travels through a plant’s stem using capillary action!",
            vinegar: "Study how vinegar affects the shell of an egg to see osmosis in action!"
        }
    };

    // Based on age and interest, generate appropriate experiments
    if (materials.length === 0) {
        experiment = "Please select at least one material to proceed.";
    } else {
        // Try to match interest and materials for a relevant experiment
        for (let material of materials) {
            if (experimentIdeas[interest][material]) {
                experiment = experimentIdeas[interest][material];
                break;
            }
        }

        // If no perfect match found, use a default fallback experiment
        if (!experiment) {
            experiment = `Explore the world of ${interest} with whatever materials you have! Try something creative and document your findings.`;
        }
    }

    return experiment;
}

// Function to display the experiment result
function displayExperiment(experiment) {
    document.getElementById('experimentDetails').textContent = experiment;
    document.getElementById('result').style.display = 'block';
}
