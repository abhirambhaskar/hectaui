document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.parentElement.classList.toggle('open');
    });
  });

  document.querySelectorAll('[data-toggle="modal"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.querySelector(btn.dataset.target);
      if (modal) modal.classList.add('open');
    });
  });

  document.querySelectorAll('.modal .close').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').classList.remove('open');
    });
  });
});
