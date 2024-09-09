let options = {
   method: 'GET',
}

let url = `https://jsonplaceholder.typicode.com/photos`
let container = document.getElementById('imgContainer')

function getPhotos() {
   fetch(url, options)
      .then(res => {
         return res.json()
      })
      .then(data => {
         console.log(data)
         refreshPhotosData(data)
      })
      .catch(err => console.log(err))
}

function refreshPhotosData(data) {
   data.forEach(image => {
      const photoCard = document.createElement('div');
      photoCard.classList.add('photoCard');

      const color = getHexColor(image.url);
      if (color) {
         const colorText = document.createElement('p');
         colorText.textContent = `Color: ${color}`;
         photoCard.appendChild(colorText);
         photoCard.style.borderColor = color;
      }

      const imgElement = document.createElement('img');
      imgElement.src = image.url;
      photoCard.appendChild(imgElement);

      const idElement = document.createElement('p');
      idElement.textContent = `${image.id}`;
      photoCard.appendChild(idElement);

      container.appendChild(photoCard);
   });
}

function getHexColor(url) {
   const parts = url.split('/');
   const lastPart = parts[parts.length - 1];
   const hexColorRegex = /^[0-9A-Fa-f]{6}$/;
   if (hexColorRegex.test(lastPart)) {
      return `#${lastPart}`;
   }
   return null;
}

getPhotos()

