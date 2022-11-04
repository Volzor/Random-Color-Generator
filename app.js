const button = document.getElementById('submit-btn');
const container = document.querySelector('.container');
const colorArray = ['rgb(0, 0, 153)', 'rgb(51, 255, 51)', 'rgb(255, 0, 0)', 'rgb(153, 153, 0)', 'rgb(153, 0, 153)'];

const randomGenerator = () => {
    const randomIndex = Math.floor(Math.random() * colorArray.length)
    container.style.backgroundColor = colorArray[randomIndex]
}

button.addEventListener('click', randomGenerator)