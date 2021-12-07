import bhbSongs from './bhb-songs.json'

export default async function handler (req, res) {
  if (req.method === 'GET') {
    const searchResults = bhbSongs.filter(song => {
      return song.id == req.query.q
    })

    res.status(200).json(searchResults)
  }
}