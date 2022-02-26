const shareButton = document.querySelector('.share-icon-button');
const shareIcon = document.querySelector('.share-icon');
const shareInfoContainer = document.querySelector('.share-info-container');
const secondaryShareButton = document.querySelector('.share-icon-white');


const toggleContainer = () => {
  shareButton.classList.toggle('light-background');
  shareIcon.classList.toggle('share-icon');
  shareInfoContainer.classList.toggle('hide-container');
}

shareButton.addEventListener('click', toggleContainer);

secondaryShareButton.addEventListener('click', toggleContainer);
