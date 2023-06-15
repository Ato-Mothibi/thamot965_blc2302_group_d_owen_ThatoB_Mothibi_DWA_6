import { authors, genres } from './data.js';
export {populateGenres, populateAuthors}

/**
 * Populates the genres select element.
 * @returns {DocumentFragment} The document fragment containing the genre options.
 */
function populateGenres() {
    const genreHtml = document.createDocumentFragment();
    const firstGenreElement = document.createElement('option');
    firstGenreElement.value = 'any';
    firstGenreElement.innerText = 'All Genres';
    genreHtml.appendChild(firstGenreElement);
    for (const [id, name] of Object.entries(genres)) {
        const element = document.createElement('option');
        element.value = id;
        element.innerText = name;
        genreHtml.appendChild(element);
    }
    return genreHtml;
}


/**
 * Populates the authors select element.
 * @returns {DocumentFragment} The document fragment containing the author options.
 */
function populateAuthors() {
    const authorsHtml = document.createDocumentFragment();
    const firstAuthorElement = document.createElement('option');
    firstAuthorElement.value = 'any';
    firstAuthorElement.innerText = 'All Authors';
    authorsHtml.appendChild(firstAuthorElement);
    for (const [id, name] of Object.entries(authors)) {
        const element = document.createElement('option');
        element.value = id;
        element.innerText = name;
        authorsHtml.appendChild(element);
    }
    return authorsHtml;
}


// /**
//  * Sets the search button event listener.
//  */
// export function setSearchButton() {
//     document.querySelector('[data-header-search]').addEventListener('click', () => {
//         document.querySelector('[data-search-overlay]').open = true;
//         document.querySelector('[data-search-title]').focus();
//     });
// }