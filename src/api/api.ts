import { notificationResType } from '../types/notificationResType'
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
        console.error(error);
    }
}

export const sendMessage = async (
    chatId: string,
    message: string
) => {
    try {
        const res = await host.post(
            `waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
            {
                chatId,
                message,  
            }
        )
        return res
    } catch (error) {
        console.error(error);    
    }
}

export const receiveNotification = async () => {
    try {
        const res = await host.get<notificationResType>(`waInstance${idInstance}/receiveNotification/${apiTokenInstance}`)
        return res
    } catch (error) {
        console.error(error);
    }
}

export const deleteNotification = async (receiptId: number) => {
    try {
        const res = await host.delete(`waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`)
        return res.data
    } catch (error) {
        console.error(error);
    }
}