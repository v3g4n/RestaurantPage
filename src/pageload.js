function pageload() {
    const content = document.getElementById('content');

    const header = document.createElement('h1');
    header.innerHTML = "Flora"

    // const img = document.createElement('img');
    // img.src = "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25462-751x1024.jpg"; 
    
    content.style.backgroundImage = "url('https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25462-751x1024.jpg')";
    content.style.backgroundSize = "cover";
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundPosition = "center";

    const paragraph = document.createElement('p');
    paragraph.innerHTML = "Welcome to all-vegan restaurant Flora!";

    content.appendChild(header);
    // content.appendChild(img);
    content.appendChild(paragraph);
    return { content };
}

export default pageload

