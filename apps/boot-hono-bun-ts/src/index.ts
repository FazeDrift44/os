import { Hono } from 'hono'
import { boot } from '@magic-one/os-core';

const app = new Hono()

const bootMessage = boot();

app.get('/', (c) => {
  return c.text(bootMessage)
})

export default app
