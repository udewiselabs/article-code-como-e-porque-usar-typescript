import express, {Application, Request, Response} from 'express'

const app: Application = express()

const products = [
  {id: '1', name: 'Produto 1'},
  {id: '2', name: 'Produto 2'},
  {id: '3', name: 'Produto 3'},
]

app.get('/', (req: Request, res:Response) => {
  res.send('Hello Word')
})

app.get('/products', (req: Request, res:Response) => {
  res.json(products)
})

app.get('/products/:id', (req: Request, res:Response) => {
  const id = req.params.id
  const product = products.find(item => item.id === id)

  if(!product) {
    return res.status(404).send('Not found')
  }

  res.json(product)
})

app.listen(3000, () => {
  console.log('Server online on port 3000')
})