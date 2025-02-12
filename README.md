# 🖥️ Network Monitor (TypeScript)


Este é um projeto de **monitoramento de rede** desenvolvido com **TypeScript** e **Node.js**. Ele permite verificar o status de conectividade de hosts através do comando `ping` e exibir se os hosts estão ativos ou inativos.

---

## 📌 **Funcionalidades**
✅ Monitoramento de múltiplos hosts via `ping`  
✅ API REST para verificar o status dos hosts  
✅ Código modular e organizado usando **TypeScript**  
✅ Suporte a variáveis de ambiente (`.env`)  
✅ Logs detalhados com **Morgan**  
✅ Suporte a **CORS**  

---

## 🚀 **Tecnologias Utilizadas**
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)
- [ping](https://www.npmjs.com/package/ping) (para testar conectividade)
- [Morgan](https://www.npmjs.com/package/morgan) (para logs)
- [Cors](https://www.npmjs.com/package/cors) (para permitir requisições de diferentes origens)

---

## 🔧 **Instalação e Execução**
### **1️⃣ Clone o repositório**
```bash
git clone https://github.com/seu-usuario/network-monitor.git
cd network-monitor
```

### 2️⃣ Instale as dependências
```bash
npm install
```

### 3️⃣ Configure o arquivo .env
Crie um arquivo .env na raiz do projeto e adicione a porta desejada (opcional):

```bash
PORT=3030
```

### 4️⃣ Configure os hosts
Edite o arquivo hosts.json e adicione os hosts que deseja monitorar:

```json
[
  { "networkName": "Google", "host": "google.com" },
  { "networkName": "Cloudflare", "host": "1.1.1.1" }
]
```
### 5️⃣ Compile o TypeScript
```bash
npm tsc 
```

### 6️⃣ Inicie o servidor

```bash
node dist/server.js
```

Ou, para rodar sem compilar antes:

```bash
npx ts-node src/server.ts
```

## 🔥 Uso da API
**Obter a lista de hosts monitorados**
📌 **GET** ```/api/hosts```
🔹 **Resposta:**
```json
[
  {
    "networkName": "Google",
    "host": "google.com",
    "alive": true,
    "time": 42.3
  }
]
```

**Testar um host específico**
📌 **GET** ```/api/ping/{host}```
🔹 **Exemplo:** ```/api/ping/google.com```
🔹 **Resposta:**
```json
{
  "host": "google.com",
  "alive": true,
  "time": 40.2
}

```