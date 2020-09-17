import { Request, Response } from 'express';
import { VotingControllerBackEnd } from '../convector';

export async function VotingController_vote_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
        console.log('Request Params:', params);
        const result = await VotingControllerBackEnd.vote(params);
        res.status(200).send(result);
    } catch(ex) {
        console.log('Error post VotingController_vote', ex.stack);
        res.status(500).send(ex);
    }
}

export async function VotingController_getByPostId_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params.postId;
        console.log('Request params: ', params);
        const result = await VotingControllerBackEnd.getByPostId(params);
        res.status(200).send(result);
    } catch(ex) {
        console.log('Error post VotingController_vote', ex.stack);
        res.status(500).send(ex);
    }
}
