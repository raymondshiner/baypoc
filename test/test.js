#!/usr/bin/env node

const readFileSync = require('fs').readFileSync
const createWriteStream = require('fs').createWriteStream
const basename = require('path').basename

// let file = "Coverage-20220429T224450.json"
// let file = "css_coverage.json"
const file = 'per_block.json'
const json = JSON.parse(readFileSync(file))

json.forEach((item) => {
  let filename = basename(new URL(item.url).pathname)
  filename = filename === '' ? 'index.html' : filename

  if (filename && item.ranges.length) {
    const stream = createWriteStream(`./split/${filename}`)

    console.log('>> Optimizing: %s with %d changes', filename, item.ranges.length)

    item.ranges.forEach((range) => {
      stream.write(item.text.slice(range.start, range.end))
    })

    stream.close()
  }
})
