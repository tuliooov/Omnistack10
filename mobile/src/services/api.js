import axios from 'axios';

const baseURL = 'http://<INSIRA O IP DO BACKEND AQUI>:3333/api';

function createAPI() {
    if (baseURL.startsWith('http://<')){
        let redStr = "\x1b[31m";
        console.error(redStr + "ERRO! Você não configurou o Servidor ainda!");
        console.error(redStr + "Adicione o seu endereço:3333 (Backend) no arquivo api.js! (Por exemplo http://192.168.1.5:3333)");
        return;
    }

    return axios.create({ baseURL })
}
const api = createAPI();
export {baseURL, api};
