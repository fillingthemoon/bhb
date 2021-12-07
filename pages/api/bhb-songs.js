import bhbSongs from './bhb-songs.json'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const searchQuery = req.query.q
    let searchResults = []

    if (Number.isInteger(parseInt(searchQuery))) {
      searchResults = bhbSongs.filter((song) => {
        return song.id == searchQuery
      })
    } else {
      searchResults = bhbSongs.filter((song) => {
        return song.verses.some((verse) => {
          return verse.some((line) => {
            return line.toLowerCase().includes(searchQuery.toLowerCase())
          })
        })
      })
    }

    if (searchResults.length <= 0) {
      return res.status(200).json({ status: 'error', results: 'No results :(' })
    } else if (searchResults.length > 10) {
      return res.status(200).json({
        status: 'error',
        results: 'Too many results. Please narrow down your search.',
      })
    }

    return res.status(200).json({ status: 'success', results: searchResults })
  }
}
