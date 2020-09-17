import * as express from 'express';
import { 
    VotingController_vote_post, VotingController_getByPostId_get } from './controllers'
export default express.Router()
.post('/voting/vote', VotingController_vote_post)
.get('/voting/:postId', VotingController_getByPostId_get)
