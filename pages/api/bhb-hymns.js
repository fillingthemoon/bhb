import bhbHymns from './bhb-hymns.json'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const searchQuery = req.query.q
    let searchResults = []

    if (Number.isInteger(parseInt(searchQuery))) {
      searchResults = bhbHymns.filter((hymn) => {
        return hymn.id == searchQuery
      })
    } else {
      searchResults = bhbHymns.filter((hymn) => {
        return hymn.verses.some((verse) => {
          return verse.some((line) => {
            return line.toLowerCase().includes(searchQuery.toLowerCase())
          })
        })
      })
    }

    if (searchResults.length <= 0) {
      return res.status(200).json({
        status: 'error',
        searchValue: searchQuery,
        results: 'No results :(',
      })
    } else if (searchResults.length > 20) {
      return res.status(200).json({
        status: 'error',
        searchValue: searchQuery,
        results: 'Too many results. Please narrow down your search.',
      })
    }

    return res
      .status(200)
      .json({
        status: 'success',
        searchValue: searchQuery,
        results: searchResults,
      })
  }
}
