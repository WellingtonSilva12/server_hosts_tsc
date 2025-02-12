import ping from 'ping';

export interface PingResult {
  alive: boolean;
  time: number | null;
}

export const pingHost = async (host: string): Promise<PingResult> => {
  try {
    
    const result = await ping.promise.probe(host, { timeout: 5 });
    return {
      alive: result.alive,
      time: typeof result.time === 'number' ? result.time : null, 
    };
  } catch (err) {
    console.error(`Erro ao pingar o host ${host}:`, (err as Error).message);
    return { alive: false, time: null };
  }
};

module.exports = { pingHost };
