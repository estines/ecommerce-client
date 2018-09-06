import next from 'next'
import express from 'express'

const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare()
    .then(() => {
        const server = express()

        /**
         * @summary middleware that handle requst and prepare data in server side
         */
        server.get('/test', (req, res) => {
            const actualPage = '/test'
            nextApp.render(req, res, actualPage)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })