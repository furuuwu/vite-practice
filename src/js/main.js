const blogSearch = document.querySelector('#blogSearch');
blogSearch.addEventListener('keyup', filterPosts);

function filterPosts() {
  let filterValue = blogSearch.value.toLowerCase();
  const posts = document.querySelectorAll('.card');

  for (let post of posts) {
    post.innerText.toLowerCase().indexOf(filterValue) > -1
      ? post.style.display = ''
      : post.style.display = 'none';
  }

  /*
  posts.forEach(post => {
    post.innerText.toLowerCase().indexOf(filterValue) > -1
      ? post.style.display = ''
      : post.style.display = 'none';
  }
  )
  */
}