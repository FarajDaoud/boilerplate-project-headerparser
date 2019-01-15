document.addEventListener('DOMContentLoaded', () => {
  fetch('https://farajdaoud-headerparser.glitch.me/api/whoami')
    .then((res) => {
      return res.json();
  })
  .then((data) => {
      document.getElementById('result').innerHTML = JSON.stringify(data);
  });
});
