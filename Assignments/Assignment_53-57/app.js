function openModal(imageSrc) {
    let modal = document.getElementById('modal');
    let modalImage = document.getElementById('modal-image');
    modalImage.src = imageSrc;
    modal.style.display = 'flex';
  
    let closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
  }
  
  function closeModal() {
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  window.addEventListener('click', function (event) {
    let modal = document.getElementById('modal');
    if (event.target === modal) {
      closeModal();
    }
  });
  
  2.
  function zoomIn() {
    let zoomParagraph = document.getElementById('zoom-paragraph');
    zoomParagraph.style.fontSize =parseInt(zoomParagraph.style.fontSize) + 10 + 'px';
  }
  
  function zoomOut() {
    let zoomParagraph = document.getElementById('zoom-paragraph');
    zoomParagraph.style.fontSize =parseInt(zoomParagraph.style.fontSize) - 10 + 'px';
  }
  
  