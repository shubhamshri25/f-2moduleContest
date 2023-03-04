const createPostBtn = document.querySelector("#btn-h");
const modal = document.querySelector(".modal");
const savePost = document.querySelector("#savePost");
const discard = document.querySelector("#cancel");
const editButtons = document.querySelectorAll(".edit-button");
const deleteButtons = document.querySelectorAll(".delete-button");

function createAPost() {
  modal.classList.add("show");
}

function closeAPost() {
  modal.classList.remove("show");
}

let blogPosts = [];

function addBlogPost(title, description) {
  blogPosts.push({ title, description });
}

function editBlogPost(index, newTitle, newDescription) {
  blogPosts[index].title = newTitle;
  blogPosts[index].description = newDescription;
}

function deleteBlogPost(index) {
  blogPosts.splice(index, 1);
}

function updateUI() {
  const blogPostContainer = document.querySelector(".blog-post-container");
  blogPostContainer.innerHTML = "";

  blogPosts.forEach((blogPost, index) => {
    const blogPostHeading = document.getElementById("blog-post-heading");
    const blogPostContent = document.getElementById("blog-post-heading");

    blogPostHeading.innerText = `${blogPost.title}`;
    blogPostContent.innerText = `${blogPost.description}`;
  });

  editButtons.forEach((editButton) => {
    editButton.addEventListener("click", (updatedTitle, updatedDescription) => {
      const index = editButton.dataset.index;
      const blogPost = blogPosts[index];
      // Display the modal with the title and description pre-filled
      blogPost.title = updatedTitle;
      blogPost.description = updatedDescription;
    });
  });

  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      const index = deleteButton.dataset.index;
      deleteBlogPost(index);
      updateUI();
    });
  });
}

createPostBtn.addEventListener("click", createAPost);
discard.addEventListener("click", closeAPost);
