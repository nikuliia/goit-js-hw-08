const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

console.log(images);

const refs = {
  ulElem: document.querySelector('ul.gallery'),
  liElem: document.querySelector('.gallery-item'),
};

function imgTemplate(obj) {
  return `<li class="gallery-item">
    <a class="gallery-link" href="${obj.original}" width="360">
      <img
        class="gallery-image js-img"
        src="${obj.preview}"
        data-source="${obj.original}"
        alt="${obj.description}"
      />
    </a>
  </li>`;
}

function imgsTemplate(images) {
  return images.map(imgTemplate).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const markup = imgsTemplate(images); // коли я зайшов на сайт створити розмітку
  refs.ulElem.innerHTML = markup; // і додати її на сайт
});

//!==========================================================================

refs.ulElem.addEventListener('click', e => {
  e.preventDefault();
  if (!e.target.classList.contains('js-img')) {
    return;
  }
  console.log(e.target);

  const largeImgUrl = e.target.dataset.source;
  console.log('Big img is blocked! URL is:', largeImgUrl);

  const imgDescr = e.target.alt;

  showModal(largeImgUrl, imgDescr);
});

function showModal(largeImgUrl, imgDescr) {
  const instance = basicLightbox.create(`
    <img src="${largeImgUrl}" alt="${imgDescr}" width="1112" height="640">
`);

  instance.show();
}
