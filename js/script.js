'use strict'        
document.addEventListener('DOMContentLoaded', () =>{

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    const   poster = document.querySelector('.promo__bg'),
            gener = document.querySelector('.promo__genre'),
            movieList = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'),
            addInput = addForm.querySelector('.adding__input'),
            checkbox = addForm.querySelector('[type="checkbox"]');
    
            
            addForm.addEventListener('submit', (event) =>{
                event.preventDefault();
    
                const newFilm = addInput.value;
                const favorite = checkbox.checked;

                if(newFilm){

                    if (favorite){
                        alert('Добовляем любимый фильм');
                    }

                    movieDB.movies.push(newFilm);
                    sortArr(movieDB.movies);
                    createMovieList(movieDB.movies, movieList);
                }
                

                event.reset();
            });

            

    const makeChanges = () =>{
        gener.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    makeChanges();

    const sortArr = (arr) =>{
        arr.sort();
    };



function createMovieList(films , parent){
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film , i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });


    // удаление элементов в масиве
    document.querySelectorAll('.delete').forEach((btn , i) =>{
        btn.addEventListener('click' , () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(movieDB.movies , movieList);
        });
    });
    
}
createMovieList(movieDB.movies , movieList);

});
