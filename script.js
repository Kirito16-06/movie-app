const searchForm = document.querySelector('form');
const moviecontainer = document.querySelector('.movie-container');
const inputBox = document.querySelector('.input-Box');
const movieposter = document.querySelector('.movie-poster');
   
const getMovieInfo =(movie)=>{
    const myApikey="*******"
   try{
    const url = `https://www.omdbapi.com/?apikey=${myApikey}&t=${movie}`;
    const response  = fetch(url);
if(!response.ok){
    throw new Error("Unale to Fetch data");
}

    const data = response.json();

    showMovieData(data);
} 
catch(Error){
    showErrorMessage("No movie Found");
}
}

// fuction to show data on screen

const showMovieData = (data) => {
    moviecontainer.innerHTML="";
    moviecontainer.classList.remove('noackground');

    const{Title,imdRating,Genre, Released, Runtime,Actors,Plot,Poster}=data;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-info');

    movieElement.innerHTML = `<h2>${Title}</h2>
        <p><strong>Rating: &#11088;</strong>${imdRating}</p>`;
    
    
        const movieGenreElement = document.createElement('div');
        movieGenreElement.classList.add('movie-genre');
        
        Genre.split(",").forEach(element=>{
         const p= document.createElement('p')
         pinnerText = element;
         movieGenreElement.appendChild(p);
        });
      
        movieElement.appendChild(movieGenreElement);


        movieElement.innerHTML += `<p><strong>Released Date: &#11088;</strong>${Released}</p>
                                <p><strong>Duration: &#11088;</strong>${Runtime}</p>
                                <p><strong>Caste: &#11088;</strong>${Actors}</p>
                                <p><strong>Plot: &#11088;</strong>${Plot}</p>`;
                                 
                                
        const moviePosterElement=document.createElement('div');
        moviePosterElement.classList.add('movie-poster');
        moviePosterElement.innerHTML = `<img src="${Poster}" alt="${Title}">`;

        moviecontainer.appendChild(moviePosterElement);
        moviecontainer.appendChild(movieElement);
}
 //Fuction to show er00roor message
 const showErrorMessage=(message)=>{
    moviecontainer.innerHTML=`<h2>${message}<h2>`;
    moviecontainer.classList.add('noackground');

    
 }  

 //Function to handle the form sumitiom
 const handleFormSubmission = (e) =>{
    e.preventDefault();
    const movieName = inputBox.value.trim();

    if(movieName !== ''){
        showErrorMessage("Ruka jara sabar rakho.....")
        getMovieInfo(movieName);
 }
 else{
    showErrorMessage("<h2> Please enter a valid movie name<h2>");
 }

 }

// Adding eventlistener to search form
searchForm.addEventListener('submit',handleFormSubmission);

