import fs from 'fs'

interface Host {
  networkName: string
  host: string
}



export const loadHosts = (): Host[] => {
  try {
    const data = fs.readFileSync('./hosts.json', 'utf8');
    return JSON.parse(data) as Host[];
  } catch (err) {
    throw new Error('Erro ao carregar o arquivo hosts.json');
  }
};

