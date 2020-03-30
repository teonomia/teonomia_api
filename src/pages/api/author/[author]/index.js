import {getDir} from '../../../../getFileSistem'


export default async (req, res) => {
  const {author} = req.query
  const archive = await getDir(`${author}/pt`)

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ archive }))
}