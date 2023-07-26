function loadPage(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
    console.log(html)

    document.getElementById('content').innerHTML = html;
    })
    .catch(error => console.error('Error loading page:', error));
}

// loadPage('index.html');

// const menuListItem =  document.querySelectorAll('.menu-list-item a')
// document.querySelectorAll('.menu-list-item a').forEach(link => {
  // console.log(link.getAttribute('href'))

// })

document.querySelectorAll('a.menu-list-item').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const url = link.getAttribute('href');
    loadPage(url);
  });
});