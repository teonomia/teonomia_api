import {getDir, getFile} from '../../../../getFileSistem'

export default async (req, res) => {
  const {author, param} = req.query

  if(param.length === 1){
    const archive = await getDir(`${author}/pt/${param[0]}`)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ archive }))
    return
  }

  const content = await getFile(`${author}/pt/${param[0]}/${param[1]}`)

  if(content.erro){
    res.statusCode = 404
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(content))
    return
  }
  res.setHeader('Content-Type', 'application/json')
  res.end(content.toString())

}