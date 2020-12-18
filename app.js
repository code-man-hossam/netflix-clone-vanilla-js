const baseURL = 'https://api.themoviedb.org/3'
const API_KEY = 'ea68542374be17f1f5f1cd778c3f21f8'
const base_url = 'https://image.tmdb.org/t/p/original'

const banner = document.querySelector('.banner')
const bannerTitle = document.querySelector('.banner_title')
const bannerOverview = document.querySelector('.banner_desc')

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    document.querySelector('.nav').style.backgroundColor = '#000'
  } else {
    document.querySelector('.nav').style.backgroundColor = 'transparent'
  }
})

document.addEventListener('DOMContentLoaded', () => {
  displayBanner()
  fetchNetflixOriginals()

  setTimeout(() => {
    fetchTrending()
    fetchTopRated()
    fetchActionMovies()
    fetchComedyMovies()
    fetchHorrorMovies()
    fetchRomanceMovies()
    fetchDocumentaries()
  }, 300)
})

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str
}

async function displayBanner() {
  const res = await fetch(
    `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`
  )
  const data = await res.json()
  const result = data.results[Math.floor(Math.random() * data.results.length)]

  banner.style.backgroundImage = `url("https://image.tmdb.org/t/p/original/${result.backdrop_path}")`
  banner.style.backgroundSize = 'cover'
  banner.style.backgroundPosition = 'center center'

  bannerTitle.innerText = result.title || result.name
  bannerOverview.innerText = truncate(result.overview, 150)
}

async function fetchNetflixOriginals() {
  const res = await fetch(
    `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`
  )
  const data = await res.json()
  const results = data.results
  const row = document.createElement('div')
  row.className = 'row'

  row.innerHTML = `<h3>Netflix Originals</h3>
        <div class="row_posters">
            ${results
              .map((item) => {
                const { id, poster_path, title } = item
                return `<img src=${`${base_url}${poster_path}`} id=${id} alt=${title} class='row_poster row_posterLarge' />`
              })
              .join('')}
        </div>`
  document.body.appendChild(row)
}

async function fetchTrending() {
  const res = await fetch(
    `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`
  )
  const data = await res.json()
  const results = data.results
  const row = document.createElement('div')
  row.className = 'row'

  row.innerHTML = `<h3>Trending Now</h3>
        <div class="row_posters">
            ${results
              .map((item) => {
                const { id, backdrop_path, title } = item
                return `<img src=${`${base_url}${backdrop_path}`} id=${id} alt=${title} class='row_poster' />`
              })
              .join('')}
        </div>`
  document.body.appendChild(row)
}

async function fetchTopRated() {
  const res = await fetch(
    `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
  )
  const data = await res.json()
  const results = data.results
  const row = document.createElement('div')
  row.className = 'row'

  row.innerHTML = `<h3>Top Rated</h3>
        <div class="row_posters">
            ${results
              .map((item) => {
                const { id, backdrop_path, title } = item
                return `<img src=${`${base_url}${backdrop_path}`} id=${id} alt=${title} class='row_poster' />`
              })
              .join('')}
        </div>`
  document.body.appendChild(row)
}

async function fetchActionMovies() {
  const res = await fetch(
    `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`
  )
  const data = await res.json()
  const results = data.results
  const row = document.createElement('div')
  row.className = 'row'

  row.innerHTML = `<h3>Action Movies</h3>
        <div class="row_posters">
            ${results
              .map((item) => {
                const { id, backdrop_path, title } = item
                return `<img src=${`${base_url}${backdrop_path}`} id=${id} alt=${title} class='row_poster' />`
              })
              .join('')}
        </div>`
  document.body.appendChild(row)
}

async function fetchComedyMovies() {
  const res = await fetch(
    `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`
  )
  const data = await res.json()
  const results = data.results
  const row = document.createElement('div')
  row.className = 'row'

  row.innerHTML = `<h3>Comedy Movies</h3>
        <div class="row_posters">
            ${results
              .map((item) => {
                const { id, backdrop_path, title } = item
                return `<img src=${`${base_url}${backdrop_path}`} id=${id} alt=${title} class='row_poster' />`
              })
              .join('')}
        </div>`
  document.body.appendChild(row)
}

async function fetchHorrorMovies() {
  const res = await fetch(
    `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`
  )
  const data = await res.json()
  const results = data.results
  const row = document.createElement('div')
  row.className = 'row'

  row.innerHTML = `<h3>Horror Movies</h3>
        <div class="row_posters">
            ${results
              .map((item) => {
                const { id, backdrop_path, title } = item
                return `<img src=${`${base_url}${backdrop_path}`} id=${id} alt=${title} class='row_poster' />`
              })
              .join('')}
        </div>`
  document.body.appendChild(row)
}

async function fetchRomanceMovies() {
  const res = await fetch(
    `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
  )
  const data = await res.json()
  const results = data.results
  const row = document.createElement('div')
  row.className = 'row'

  row.innerHTML = `<h3>Romance Movies</h3>
        <div class="row_posters">
            ${results
              .map((item) => {
                const { id, backdrop_path, title } = item
                return `<img src=${`${base_url}${backdrop_path}`} id=${id} alt=${title} class='row_poster' />`
              })
              .join('')}
        </div>`
  document.body.appendChild(row)
}

async function fetchDocumentaries() {
  const res = await fetch(
    `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`
  )
  const data = await res.json()
  const results = data.results
  const row = document.createElement('div')
  row.className = 'row'

  row.innerHTML = `<h3>Documentries</h3>
        <div class="row_posters">
            ${results
              .map((item) => {
                const { id, backdrop_path, title } = item
                return `<img src=${`${base_url}${backdrop_path}`} id=${id} alt=${title} class='row_poster' />`
              })
              .join('')}
        </div>`
  document.body.appendChild(row)
}
