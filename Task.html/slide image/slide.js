
  const images = ['wavy-black-white-background (1).jpg', 'pan card .jpg', 'bc.jpg', 'Screenshot 2025-05-15 171929.png.jpeg'];
  let currentIndex = 0;
  const carImage = document.getElementById('randimage');

  function showImage(index) {
    carImage.src = images[index];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function preImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
