const foodsUrl = 'https://presho99.github.io/skfoods/foods'


// 2. Randomize background color for box inside rating
const colors = ["#f9a166", "f5b8d7", "#coc9a9", "#ffd15e"]
const ratingsColorElement = document.querySelector('.rating-color')

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    ratingsColorElement.style.backgroundColor = randomColor;
}


function fetchFoodsData(){
    return fetch(foodsUrl)
    .then(response => response.json())
    .then(data => data.foodsData)
    .catch(error => {
        console.error('Error fetching data', error)
    })
}

function displayRatings(){
    fetchFoodsData()
    .then(foodsData => {
        if(foodsData) {
            const ratings = document.querySelector('.rating')
// Loop through each food item and create HTML elements
            foodsData.forEach(food => {
                const rating = food.rating

                // Create a h3 element for each rating
                const ratingElement = document.createElement('h3')
                ratingElement.textContent = `${rating}`

                // Styling ratingElement
                ratingElement.style.position = 'absolute'
                ratingElement.style.fontSize = '30px'
                ratingElement.style.top = "0"
                ratingElement.style.right = "-20px"

                // Append the rating element to the container
                ratings.appendChild(ratingElement)

                ratingsColorElement.appendChild(ratingElement);
            })

            // Change color every 30 seconds
            setInterval(changeColor, 30000)
            // Display initial color
            changeColor()
        }
    })
}
// Call the function to display ratings
displayRatings()

