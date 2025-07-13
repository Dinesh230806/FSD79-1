function toggleDetails() {
  const details = document.getElementById('extra-details');
  const btn = document.getElementById('toggle-btn');

  if (details.style.display === 'none' || details.style.display === '') {
    details.style.display = 'block';
    btn.textContent = 'Show Less';
  } else {
    details.style.display = 'none';
    btn.textContent = 'Show More';
  }
}