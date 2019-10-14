import fs from 'fs'
import AdBlockClient from 'adblock-rs'

const elRules = fs.readFileSync('./data/easylist.to/easylist/easylist.txt', { encoding: 'utf-8' }).split('\n')
const uboUnreakRules = fs.readFileSync('./data/uBlockOrigin/unbreak.txt', { encoding: 'utf-8' }).split('\n')
const rules = elRules.concat(uboUnreakRules)
const resources = fs.readFileSync('./data/uBlockOrigin/resources.txt', { encoding: 'utf-8' })

// create engine with debug = true
const engine = new AdBlockClient.Engine(rules, true)
engine.updateResources(resources)

export default engine
