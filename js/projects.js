const blogPosts = [
    {
        title: 'PHOTOGRAPHER PORTFOLIO V2',
        time: 'HTML5 · CSS3 · THREE JS · REACT ',
        image: 'img/maria-3d.png', 
        link: 'https://photo-portfolio-3js.vercel.app/',
        target: '_blank' 
    },
    {
        title: 'THE MAGIC PORTAL',
        time: 'three.js · JS',
        image: 'img/portal1.jpg', 
        link: 'https://threedportal.vercel.app/',
        target: '_blank'
    },
    {
        title: 'PHOTOGRAPHER PORTFOLIO V1',
        time: 'HTML5 · CSS3 · JS',
        image: 'img/bymariadelrio.jpg', 
        link: 'https://bymariadelrio-portfolio.vercel.app/',
        target: '_blank' 
    },
    {
        title: 'LAPTOP V PORTFOLIO',
        time: 'HTML5 · CSS3 · JS · THREE JS',
        image: 'img/laptop.png', 
        link: 'https://iggy-3d-portfolio.vercel.app',
        target: '_blank' 
    },
    {
        title: 'SIMPLE TIMER/ALARM/TABATA',
        time: 'HTML5 · CSS3 · JS',
        image: 'img/clock.png', 
        link: 'https://clock-eight-delta.vercel.app/',
        target: '_blank' 
    }
];


const createBlogposts = () => {
    blogPosts.forEach(post => {
        let blogPostSection = document.createElement('div');
        blogPostSection.classList.add('blog__post');

        let postDiv = document.createElement('div');
        postDiv.classList.add('post');

        let imageContainer = document.createElement('div');
        imageContainer.classList.add('post__image__container');

        // Crea el enlace con el atributo target="_blank"
        let imageLink = document.createElement('a');
        imageLink.href = post.link; // Establece la URL de la página HTML
        imageLink.target = '_blank'; // Abre el enlace en una nueva pestaña

        let image = document.createElement('img');
        image.classList.add('blog__post__img');
        image.src = post.image;

        imageLink.appendChild(image); // Coloca la imagen dentro del enlace

        let postDetails = document.createElement('div');
        postDetails.classList.add('post__details');

        let postTitle = document.createElement('p');
        postTitle.innerText = post.title;

        let postTime = document.createElement('p');
        postTime.innerText = post.time;

        postDetails.append(postTitle, postTime);

        imageContainer.appendChild(imageLink); // Coloca el enlace en lugar de la imagen directamente
        postDiv.append(imageContainer, postDetails);
        blogPostSection.appendChild(postDiv);

        document.getElementById('blog').appendChild(blogPostSection);
    })
}



export {
    createBlogposts
}