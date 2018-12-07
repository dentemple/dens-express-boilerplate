const express = require('express')
const router = express.Router()

/* test */
router.get('/ping', (_, res) => res.send({ ping: 'ok', route: '/users/ping' }))

/* create */
router.post('/')

/* read */
router.get('/')
router.get('/:username')

/* update */
router.patch('/:username')

/* delete */
router.delete('/:username')

module.exports = router
