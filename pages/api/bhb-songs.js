import bhbSongs from './bhb-songs.json'

export default async function handler (req, res) {
  if (req.method === 'GET') {
    res.status(200).json(bhbSongs)
  }
}