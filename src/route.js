import { Router } from 'express';
import { Datastore } from '@google-cloud/datastore';

// Declare router object, we will export this later so app can use it as a middleware
const router = Router()
// Declare datastore object, Datastore related actions will be performed by it
const datastore = new Datastore()

router.get('/anime', async (req, res, next) => {
    try {
        const limit = req.params.limit ? Number(req.param.limit) : 50
        const offset = req.params.offset ? Number(req.params.offset) : 0 
        const query = datastore.createQuery("mal_anime").limit(limit).offset(offset)
        const data = await datastore.runQuery(query)
        res.json(data[0])
    } catch(e) {
        next(e)
    }

})

// Need to get a single entity from Datastore, datastore.get() works
router.get('/anime/:id', async (req, res, next) => {
    try {
        const id = Number(req.params.id)
        const query = datastore.createQuery("mal_anime").filter("anime_id", id)
        const data = await datastore.runQuery(query)
        res.json(data[0])
    } catch(e) {
        next(e)
    }    
})

export default router;