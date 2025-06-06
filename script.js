const blogData = [
  {
    title: "Mastering JavaScript",
    image: "https://via.placeholder.com/300x200",
    description: "Learn the fundamentals of JavaScript and how to build powerful web apps."
  },
  {
    title: "Responsive Web Design",
    image: "https://via.placeholder.com/300x200",
    description: "Make your website mobile-friendly using modern CSS techniques and frameworks."
  },
  {
    title: "Getting Started with Bootstrap",
    image: "https://via.placeholder.com/300x200",
    description: "Speed up your development using Bootstrap’s pre-built components and utilities."
  },
  {
    title: "React Basics for Beginners",
    image: "https://via.placeholder.com/300x200",
    description: "Start building reactive web interfaces with React JS step-by-step."
  },
  {
    title: "Node.js & Express Crash Course",
    image: "https://via.placeholder.com/300x200",
    description: "Build scalable backends using Node.js and Express in this quick guide."
  },
  {
    title: "CSS Grid vs Flexbox",
    image: "https://via.placeholder.com/300x200",
    description: "Compare the two major layout systems in CSS with practical use cases."
  },
   {
    title: "Mastering JavaScript",
    image: "https://via.placeholder.com/300x200",
    description: "Learn the fundamentals of JavaScript and how to build powerful web apps."
  },
  {
    title: "Responsive Web Design",
    image: "https://via.placeholder.com/300x200",
    description: "Make your website mobile-friendly using modern CSS techniques and frameworks."
  },
  {
    title: "Getting Started with Bootstrap",
    image: "https://via.placeholder.com/300x200",
    description: "Speed up your development using Bootstrap’s pre-built components and utilities."
  },
  {
    title: "React Basics for Beginners",
    image: "https://via.placeholder.com/300x200",
    description: "Start building reactive web interfaces with React JS step-by-step."
  },
  {
    title: "Node.js & Express Crash Course",
    image: "https://via.placeholder.com/300x200",
    description: "Build scalable backends using Node.js and Express in this quick guide."
  },
  {
    title: "CSS Grid vs Flexbox",
    image: "https://via.placeholder.com/300x200",
    description: "Compare the two major layout systems in CSS with practical use cases."
  }
];

const blogContainer = document.getElementById('blogContainer');

blogData.forEach(post => {
  const col = document.createElement('div');
  col.className = 'col-md-4';

  col.innerHTML = `
    <div class="card h-100 shadow rounded-4 border-0">
      <img src="${post.image}" class="card-img-top rounded-top-4" alt="${post.title}">
      <div class="card-body d-flex flex-column p-4">
        <h5 class="card-title text-primary">${post.title}</h5>
        <p class="card-text text-secondary">${post.description}</p>
        <a href="#" class="btn btn-outline-primary mt-auto">Read More</a>
      </div>
    </div>
  `;

  blogContainer.appendChild(col);
});
