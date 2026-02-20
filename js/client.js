

let urlPublisher = 'https://c-n-black-hair-and-beauty-blog.netlify.app/publisher';

// The data you want to send in the request body
const publisher = {
  publisher_name: 'CoiledKind2'
};

postEntity(publisher, urlPublisher);

let urlAuthor = 'https://c-n-black-hair-and-beauty-blog.netlify.app/author ';
const author = {
  LAST_NAME: "world",
  FIRST_NAME: "hello2",
  FACEBOOK: "www.facebook.com",
  INSTAGRAM: "www.instagram.com",
  YOUTUBE: "www.youtube.com",
  TIKTOK: "www.tiktok.com",
  X: "www.X.com"

};

postEntity(author, urlAuthor);

 

function postAuthor(author, url) {
  axios.post(url, author, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })

    .then(response => {
      // Handle - successful response
      console.log('Response data:', response.data);
      console.log('Status code:', response.status);

    })
    .catch(error => {
    // Handle errors - network  and server errors  
      console.error('There was an error!', error);
    });

}
function postEntity( url,entity) {
  axios.post(url, entity, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })

    .then(response => {
      // Handle - successful response
      console.log('Response data:', response.data);
      console.log('Status code:', response.status);

    })
    .catch(error => {
      // Handle errors - network  and server errors  
      console.error('There was an error!', error);
    });

}
