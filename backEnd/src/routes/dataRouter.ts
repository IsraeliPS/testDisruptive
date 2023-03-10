import express, { Request, Response } from 'express';
import { getTypesCoins } from '../core/getTypesCoins';

export const dataRouter = express.Router();

dataRouter.get('/', async (req: Request, res: Response) => {
  try {
    const typesCoins = await getTypesCoins();

    if (typesCoins) {
      res.status(200).json({ payload: typesCoins });
    } else {
      res.status(409).json({ Error: 'Error getting data' });
    }
  } catch (err) {
    res.status(500).json({
      status: 'error',
      messariApiError: true,
    });
  }
});

/**
 * Post track
 * @openapi
 * /data:
 *    post:
 *      tags:
 *        - Data
 *      summary: "Load all data from Api"
 *      description: Load all data
 *      responses:
 *        '200':
 *          description: Return all data 3 coins
 *        '409':
 *          description: Error getting data
 *        '500':
 *          description: Error loading data.
 *      security:
 */
