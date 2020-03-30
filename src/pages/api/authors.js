import {getDir} from '../../getFileSistem'


export default async (req, res) => {
  const authors = await getDir()

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({authors}))
}