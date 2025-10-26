document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('showResumeBtn');
  const intro = document.getElementById('intro');
  const resume = document.getElementById('resume');

  btn.addEventListener('click', function() {
    intro.classList.add('hidden');       // hide button section
    resume.classList.remove('hidden');   // show resume section
  });
});

