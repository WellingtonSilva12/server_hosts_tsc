import express, { Request, Response, NextFunction } from 'express';
import { loadHosts } from './services/hostService';
import { pingHost } from './services/pingService';

const router = express.Router();

// Rota para listar os hosts e seus status
router.get('/hosts', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hosts = loadHosts();
    const results = await Promise.all(
      hosts.map(async (host) => {
        const pingResult = await pingHost(host.host);
        return {
          networkName: host.networkName,
          host: host.host,
          alive: pingResult.alive,
          time: pingResult.time || null,
        };
      })
    );
    res.json(results);
  } catch (err) {
    next(err);
  }
});

// Rota para pingar um host específico
router.get('/ping/:host', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const host = req.params.host;
    const result = await pingHost(host);
    res.json({
      host: host,
      alive: result.alive,
      time: result.time,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
