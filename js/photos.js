var photosData = [
  {
    'id': 1,
    'imagen': 'smart1.jpg',
    'descripcion': 'Moto G5',
  },
  {
    'id': 2,
    'imagen': 'smart2.jpg',
    'descripcion': 'One Plus',
  },
  {
    'id': 3,
    'imagen': 'smart3.jpg',
    'descripcion': 'LG K9',
  },
  {
    'id': 4,
    'imagen': 'smart4.jpg',
    'descripcion': 'Galaxy S9',
  },
  {
    'id': 5,
    'imagen': 'smart5.jpg',
    'descripcion': 'Galaxy S9 Edge',
  },
  {
    'id': 6,
    'imagen': 'smart6.jpg',
    'descripcion': 'Pixel 2',
  },
  {
    'id': 7,
    'imagen': 'smart7.jpg',
    'descripcion': 'Iphone X',
  },
];

/** load webpage*/
function init() {
  photos(photosData);
}


/** load photos selection*/
function photos(photos) {
  let tabla = document.getElementById('photos');
  // cramos la fila con fotos
  let row = document.createElement('tf');
  for (var i = 0; i < 7; i++) {
    let column = createPhotoColumn(i);
    row.appendChild(column);
  }
  console.log(row);
  tabla.appendChild(row);
    
  // agregamos las flechas 
  // body
  let selector = document.getElementById('main');
  // flechas
  let left = document.createElement('img');
  let right = document.createElement('img');
  left.id = 'larrow';
  left.src = 'images/left.png';
  left.addEventListener('click', changueLeft, false);
        
  right.id = 'rarrow';
  right.src = 'images/right.png';
  right.addEventListener('click', changueRight, false);

  selector.appendChild(left);
  selector.appendChild(right);
}

// crea cada imagen
function createPhotoColumn(id) {

  let image = document.createElement('img');
  let current = getCurrent(id);
  image.src = 'images/' + current.imagen;
  image.width = 64;
  image.height = 64;
  image.id = current.id;
  // aqui se agrega el evento que cambia el src de un elemento por otro en este caso del elemento seleccionado a la imagen inferior
  image.addEventListener("click", function() { changuePhoto(this) }, false);
  let column = document.createElement('td');
  column.appendChild(image);
  return column;
}

function getCurrent(id)
{
  for (var i = 0; i < 7 ; i++) {
   if(photosData[i] = photosData[id]) {
     return photosData[i];
   }
  }
}

function changuePhoto(selectImg) {
  let showPhoto = document.querySelector('.laImagen');
  console.log(showPhoto);
  showPhoto.src = selectImg.src;
  showPhoto.id = selectImg.id;
}

function changueLeft() {
  let showPhoto = document.querySelector('.laImagen');
  console.log(showPhoto);
  let currentId = showPhoto.id;
  showPhoto.src = getPreviousc(currentId);
}

function getNextSrc(currId) {
  if(currId == photosData.length) {
    console.log(photosData.length);
    // si es la ultima regresa 1
    return 'images/' + photosData[0].imagen;
  }

  photosData.forEach(function(photo) {
    if(photo.id == currId) {
      let nextImgSrc = 'images/' + photo.imagen; 
      return nextImgSrc;
    }
  });
}

function changueRight() {
  let showPhoto = document.querySelector('.laImagen');
  let currentId = showPhoto.id;
  showPhoto.src = getNextSrc(currentId);
}

function getPreviousSrc(currId) {
  if(currId == 1) {
    // si es la primera regresa la ultima
    return 'images/' + photosData[photosData.length - 1].imagen;
  }

  photosData.forEach(function(photo) {
    if(photo.alt == currId) {
      let nextImgSrc = 'images/' + photo.imagen; 
      return nextImgSrc;
    }
  });
}
  
