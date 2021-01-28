export const getSearchTerm = () => {
    const rawSearchTerm = document.getElementById("search").nodeValue.trim();
    const regex = /[ ]{2,}/gi;
    const searchTerm = rawSearchTerm.replaceAll(regex, " ");
    return searchTerm;
}

export const retrieveSearchResults = async (searchTerm) => {
    const wikiSearchString = getWikiSearchString(searchTerm);
}

const getWikiSearchString = (searchTerm) => {
    const maxChars = getMaxChars();
}

const getMaxChars = () => {
    const width = window.innerWidth || 
}