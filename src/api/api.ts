import { host } from './index'

//  После авторизации idInstance и apiTokenInstance
//  берутся из localStorage
const idInstance = localStorage.getItem('idInstance')
const apiTokenInstance = localStorage.getItem('apiTokenInstance')

export const check = async (
    idInstance: string,
    apiTokenInstance: string
) => {
    try {
        const res = await host.get(`waInstance${idInstance}/getStateInstance/${apiTokenInstance}`)
        return res
    } catch (error) {
        console.log(error);
    }
}
export const sendMessage = async (
    chatId: string,
    message: string
) => {
    const res = await host.post(
        `waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        {
            chatId,
            message,  
        }
    )
}