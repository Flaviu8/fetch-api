
let container = document.getElementById("container-text");

async function fetchingData () {

  let url = 'https://jsonplaceholder.typicode.com/posts'
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }

}


async function renderListItems()  {

  let data = await fetchingData()

  let html = ''

    data.forEach((blocksText) => {
    
       let htmlText = `<div class="blocksText">
                            <h2>${blocksText.id}</h2>
                            <h1 class="title">${blocksText.title}</h1>
                            <p class="paragraph">${blocksText.body}</div>
                        </div>`;

        html += htmlText;

        container.innerHTML = html
      
    });
  };

  renderListItems();




