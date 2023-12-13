const recipes = [
    { food: "Spaghetti Bolognese", recipe: "Boil spaghetti and prepare a rich Bolognese sauce with minced meat, tomatoes, and herbs." },
    { food: "Chicken Alfredo", recipe: "Cook fettuccine pasta and toss it with creamy Alfredo sauce and grilled chicken." },
    { food: "Margherita Pizza", recipe: "Top pizza dough with tomato sauce, fresh mozzarella, and basil for a classic Margherita pizza." },
    { food: "Chicken Stir Fry", recipe: "Stir-fry chicken with colorful vegetables and soy sauce for a quick and tasty meal." },
    { food: "Grilled Salmon", recipe: "Season salmon fillets with herbs and grill until cooked through. Serve with a side of steamed vegetables." },
    { food: "Vegetable Curry", recipe: "Cook mixed vegetables in a flavorful curry sauce made with coconut milk and spices." },
    { food: "Beef Tacos", recipe: "Season ground beef with taco spices and assemble with tortillas, lettuce, tomatoes, and cheese." },
    { food: "Caesar Salad", recipe: "Toss romaine lettuce with Caesar dressing, croutons, and parmesan cheese for a classic Caesar salad." },
    { food: "Chicken Noodle Soup", recipe: "Simmer chicken, noodles, and vegetables in a savory broth for a comforting chicken noodle soup." },
    { food: "Caprese Salad", recipe: "Layer sliced tomatoes, fresh mozzarella, and basil leaves. Drizzle with olive oil and balsamic glaze." },
    // ... Continue the list with 190 more food items
];

let spinning = false;

function spinWheel() {
    if (!spinning) {
        spinning = true;
        const wheel = document.getElementById('wheel');
        const resultDiv = document.getElementById('result');

        const spinDuration = Math.floor(Math.random() * 4000) + 2000;
        wheel.style.transition = `transform ${spinDuration}ms ease-out`;

        const randomRotation = Math.floor(Math.random() * 360) + 3600;
        wheel.style.transform = `rotate(${randomRotation}deg)`;

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * recipes.length);
            const randomFood = recipes[randomIndex].food;
            const randomRecipe = recipes[randomIndex].recipe;
            
            resultDiv.innerHTML = `<strong>${randomFood}</strong>: ${randomRecipe}`;
            spinning = false;
            wheel.style.transition = 'none';
            wheel.style.transform = 'rotate(0deg)';
        }, spinDuration);
    }
}
