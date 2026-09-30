const progress = document.querySelector('.progress span');
const updateProgress = () => {
  const total = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${total > 0 ? (scrollY / total) * 100 : 0}%`;
};
addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const heart = document.querySelector('.heart');
heart.addEventListener('click', () => {
  heart.classList.remove('pop');
  void heart.offsetWidth;
  heart.classList.add('pop');
  heart.textContent = heart.textContent === '♥' ? '♥♥' : '♥';
});
