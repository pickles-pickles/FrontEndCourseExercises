/* //!! TO BE DONE

3d card rotate to change the myStatus
*/

//Modal

const openModal = () => {
  document.getElementById('modal-container').classList.remove('isClosed')
  document.getElementById('modal-container').classList.add('isOpen')
  console.log('open')
}

const closeModal = () => {
  document.getElementById('modal-container').classList.remove('isOpen')
  document.getElementById('modal-container').classList.add('isClosed')
  console.log('close')
}

const title = document.getElementById('title')

const author = document.getElementById('author')

const year = document.getElementById('year')

const clearInputValues = () => {
  console.log('submitted')
  const title = document.getElementById('title') //(*)
  title.value = ''
  const author = document.getElementById('author') //(*)
  author.value = ''
  const year = document.getElementById('year') //(*)
  year.value = ''

  console.log('cleared')
}

//myStatus handler

const handlemyStatusChange = (z, event) => {
  z = 4
  console.log('called', z)
  event.target.style.backgroundColor = 'black'
  console.log('called', z + 1)
}

// delete handler

/* LIBRARY */

let myLibrary = [
  { title: 'LOTR', author: 'Tolkien', year: 1976, id: Math.random() * 1000 }
]

function Book (title, author, year) {
  const id = 'ISBN' + Math.floor(Math.random() * 1000)
  let readStatus = false
  this.title = title
  this.author = author
  this.year = year
  this.readStatus = readStatus
  this.id = id
}

//new Book(args), args are referred to (*),aka input values
/* function preventUndefinedValues () {
  if (title.value === '' || author.value === '' || year.value === '') return
} */
function addBookToLibrary () {
  if (title.value === '' || author.value === '' || year.value === '') return
  myLibrary.push(
    new Book(
      title.value,
      author.value,
      year.value,
      (id = 'ISBN' + Math.floor(Math.random() * 1000))
    )
  )
  console.log(myLibrary)
}

function deleteBook (el) {
  var id = el.parentElement.id
  //!!Remove in production
  console.log('Lib b4: ', myLibrary)
  myLibrary = myLibrary.filter(book => book.id !== id)
  //!!Remove in production
  console.log('Lib after: ', myLibrary)
}

function deleteCard (el) {
  el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode)
}

function ChangeReadStatus (el) {
  console.log(el)
  var id = el.parentElement.id
  for (let i = 0; i < myLibrary.length; i++) {
    if ((myLibrary[i].id = id)) {
      myLibrary[i].readStatus = !myLibrary[i].readStatus
      console.log(myLibrary[i].readStatus)
      break
    }
  }

  let statusMarker = document
    .getElementById(id)
    .getElementsByClassName('card-read-status-marker')[0]
  if (statusMarker.classList.contains('hidden')) {
    statusMarker.classList.replace('hidden', 'visible')
  } else if (statusMarker.classList.contains('visible')) {
    statusMarker.classList.replace('visible', 'hidden')
  }
}
//card

/* const HTMLLibrary = myLibrary
  .map(
    book =>
      `
    <h1> ${book.title} </h1>
    <h2>By: ${book.author}</h2>
    Published: ${book.year}
    `
  )
  .join('') */

//get the card container
const cardsContainer = document.getElementById('cards-container')

// Show the preexisitng library content on load
//cardsContainer.insertAdjacentHTML('beforeend', `${HTMLLibrary}`)

const showCard = () => {
  const card = document.createElement('div')
  cardsContainer.appendChild(card)
  console.log(myLibrary[myLibrary.length - 1])
  card.insertAdjacentHTML(
    'beforeend',
    `
    <div class="card" id='${myLibrary[myLibrary.length - 1].id}'>
    <div class="card-read-status-marker hidden"></div>
    <h1 class="card-title">${myLibrary[myLibrary.length - 1].title}</h1>
    <h2>${myLibrary[myLibrary.length - 1].author}</h2>
    <p>${myLibrary[myLibrary.length - 1].year}</p>
    <button class="btn-sm" onclick="ChangeReadStatus(this)">Mark as read</button>

    <button class="btn-sm" onclick="
    deleteBook(this);
    deleteCard(this);
     ">
    Delete from library</button>
    <div>
    `
  )
}
//

/* HTMLWizards = wizards.map(wizard => `<p> ${wizard} </p>`).join('')
const div = document.getElementById('h')
div.insertAdjacentHTML('beforeend', `  ${HTMLWizards}`) */

/* function showButton () {
  const button = document.createElement('button')
  button.innerText = 'lalal'
  cardsContainer.appendChild(button)
} */
