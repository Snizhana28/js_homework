import { films_data } from './data.js';

let films = films_data;
addFilms(films);

function addFilms(films) {
   let container_div = document.getElementById('container_div');
   container_div.innerHTML = '';

   for (let i = 0; i < films.length; i++) {
      container_div.innerHTML += `
        <div id='film_${films[i].id}' class="frame_film">
            <div class="team-grid__member hover">
                <div class="film__info">
                    <div class="center-vert-content">
                        <h3 class="film__name">${films[i].name}</h3>
                        <p class="film__type">${films[i].type}</p>
                        <a class="read_more" data-id="${films[i].id}">Read more</a>
                    </div>
                </div>
                <img class="img_film" src='${films[i].img}' alt="${films[i].name}">
            </div>
            <div class="edit_div">
                <a class="edit_btn" id="edit_${films[i].id}" data-id="${films[i].id}" style="background: #D68D2C">Edit</a>
                <a id="del_${films[i].id}" name="del_btn" class="del_func delete_btn">Delete</a>
            </div>
        </div>
        `;
   }

   document.querySelectorAll('.read_more').forEach(btn => {
      btn.addEventListener('click', function () {
         let filmId = this.getAttribute('data-id');
         let film = films.find(f => f.id == filmId);
         showModal(film);
      });
   });

   document.querySelectorAll('.edit_btn').forEach(btn => {
      btn.addEventListener('click', function () {
         let filmId = this.getAttribute('data-id');
         let film = films.find(f => f.id == filmId);
         populateEditModal(film);
      });
   });
}

function showModal(film) {
   document.getElementById('modal_title').innerText = film.name;
   document.getElementById('modal_type').innerText = `Type: ${film.type}`;
   document.getElementById('modal_img').src = film.img;
   document.getElementById('modal_year').innerText = `Year: ${film.year}`;
   document.getElementById('modal_score').innerText = `Score: ${film.score}`;
   document.getElementById('modal_actors').innerText = `Actors: ${film.actors.join(', ')}`;
   document.getElementById('modal_description').innerText = `Description: ${film.description}`;
   document.getElementById('film_modal').style.display = 'block';
}

function populateEditModal(film) {
   document.getElementById('edit_film_name').value = film.name;
   document.getElementById('edit_film_type').value = film.type;
   document.getElementById('edit_film_year').value = film.year;
   document.getElementById('edit_film_score').value = film.score;
   document.getElementById('edit_film_description').value = film.description;
   document.getElementById('edit_modal').style.display = 'block';

   document.getElementById('save_edit').setAttribute('data-id', film.id);
}

document.getElementById('save_edit').addEventListener('click', () => {
   let filmId = document.getElementById('save_edit').getAttribute('data-id');
   let film = films.find(f => f.id == filmId);

   film.name = document.getElementById('edit_film_name').value;
   film.type = document.getElementById('edit_film_type').value;
   film.year = parseInt(document.getElementById('edit_film_year').value, 10);
   film.score = parseFloat(document.getElementById('edit_film_score').value);
   film.description = document.getElementById('edit_film_description').value;

   clearFilms();
   addFilms(films);
   document.getElementById('edit_modal').style.display = 'none';
});

document.querySelector('.close_edit_modal').addEventListener('click', function () {
   document.getElementById('edit_modal').style.display = 'none';
});

document.querySelector('.close_modal').addEventListener('click', function () {
   document.getElementById('film_modal').style.display = 'none';
});

window.addEventListener('click', function (event) {
   if (event.target == document.getElementById('film_modal')) {
      document.getElementById('film_modal').style.display = 'none';
   }
});

function hideAboutSection() {
   document.getElementById('about').style.display = 'none';
   document.getElementById('container_div').style.display = 'block'; // Показуємо секцію фільмів
}
function clearFilms() {
   document.getElementById('container_div').innerHTML = '';
}

document.getElementById('sort_mode_btn').addEventListener('click', () => {
   hideAboutSection();
   let filter = document.getElementById('filter');
   let options = document.getElementById('options');
   if (filter.style.height === '60px') {
      options.style.display = 'none';
      filter.style.height = '0px';
   } else {
      filter.style.height = '60px';
      setTimeout(() => { options.style.display = 'flex' }, 300);
   }
});

document.getElementById('edit_mode_btn').addEventListener('click', () => {
   let edit_div = document.querySelectorAll('.edit_div');
   edit_div.forEach((item) => {
      item.style.display = item.style.display === 'flex' ? 'none' : 'flex';
   });
});

document.getElementById('sort_by_year').addEventListener('click', () => {
   films = films.sort((a, b) => b.year - a.year);
   clearFilms();
   addFilms(films);
});

document.getElementById('sort_by_rate').addEventListener('click', () => {
   films = films.sort((a, b) => b.score - a.score);
   clearFilms();
   addFilms(films);
});

document.getElementById('filter_by_genre').addEventListener('change', (e) => {
   let genre = e.target.value;
   let filtered_films = films_data.filter(film => genre === 'all' || film.type === genre);
   clearFilms();
   addFilms(filtered_films);
});

document.getElementById('search_query').addEventListener('input', (e) => {
   let new_films = films.filter(film => {
      let searchStr = film.actors.join(' ').toLowerCase() + film.name.toLowerCase();
      return searchStr.includes(e.target.value.toLowerCase());
   });
   clearFilms();
   addFilms(new_films);
});

document.addEventListener('click', (e) => {
   if (e.target.name === 'del_btn') {
      let film_id = e.target.id.slice(4);
      let id_div = `film_${film_id}`;
      document.getElementById(id_div).remove();
      films = films.filter(f => f.id != film_id);
   }
});
document.querySelector('a[href="#about"]').addEventListener('click', function () {
   let aboutSection = document.getElementById('about');
   let filmSection = document.getElementById('container_div');

   if (aboutSection.style.display === 'block') {
      aboutSection.style.display = 'none';
      filmSection.style.display = 'block';
   } else {
      aboutSection.style.display = 'block';
      filmSection.style.display = 'none';
   }
});