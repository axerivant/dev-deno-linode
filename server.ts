import { Application } from './deps.ts'

const app = new Application()

app.use((ctx) => {
	console.log(ctx)
	ctx.response.body = 'Hello world!'
})

await app.listen({ port: 8000 })
