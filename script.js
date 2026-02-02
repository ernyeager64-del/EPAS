// Smooth scroll for buttons/links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Modal video
const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');

function openModal(videoSrc) {
  modal.style.display = "flex";
  modalVideo.src = videoSrc;
  modalVideo.play();
}

function closeModal() {
  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.src = "";
}

// Close modal on click outside video
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}
