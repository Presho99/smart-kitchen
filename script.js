const foodsUrl = 'https://presho99.github.io/skfoods/foods'

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

                // Append the rating element to the container
                ratings.appendChild(ratingElement)
            })
        }
    })
}
// Call the function to display ratings
displayRatings()

