let key = (id) => {
    return document.getElementById(id)  
}

let handleSearch = () => {
    let keyword = key('keyword')
    let url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`
    fetch(url).then(res => res.json()).then(data => showArtis(data.artists))
}

const showArtis = (data) =>{
    let container = key('artists')
    container.textContent = '';
    data.forEach((artist) => {
      
        let div = document.createElement('div')
        div.classList.add('artist-card')
        div.innerHTML=
       `
       <div class="image-container">
          <div class="image-container-inner">
            <img src="${artist.strArtistThumb ? artist.strArtistThumb : 'https://www.pngitem.com/pimgs/m/99-998739_dale-engen-person-placeholder-hd-png-download.png'}" alt="">
          </div>
        </div>

        <div class="info-container">
          <h1>${artist.strArtist}</h1>
          <h6>Country : ${artist.strCountry ? artist.strCountry : 'Country Not Available !!'} </h6>
          <h6>Genere : ${artist.strStyle ? artist.strStyle : 'No Genere Available !!'} </h6>
        </div>

        <button class="album-button">
          <p class="button-title">Albums</p>
        </button> `;
        container.appendChild(div);
    });
}

