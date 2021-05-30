import Express from 'express'
import heroesRoutes from './heroes-routes'
import homeRoutes from './home-routes'

const router = Express.Router()

router.use('/heroes', heroesRoutes)
router.use('/', homeRoutes)

export default router
