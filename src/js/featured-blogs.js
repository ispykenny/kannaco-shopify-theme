const setFeaturedBlogMarkup = () => {
  const blog_item = document.querySelectorAll('.blog-item');
  if(!blog_item.length) return;
  let setWrapper = ``;
  let sideMain = ``;

  if(blog_item.length < 4) {
    blog_item[0].closest('section').remove();
    return;
  }

  blog_item.forEach((blog, index) => {
    if(index < 1) {
      setWrapper = `
        <div class="featured_main">
          ${blog.outerHTML}
        </div>
      `
    } 

    if(index > 0) {
      sideMain += `${blog.outerHTML}`
    }

  })

  let sideMainParent = document.createElement('div');
  sideMainParent.classList.add('side-features')
  sideMainParent.innerHTML = sideMain;
  document.querySelector('.blog-features').innerHTML = setWrapper;
  document.querySelector('.blog-features').appendChild(sideMainParent)
}


export default setFeaturedBlogMarkup;