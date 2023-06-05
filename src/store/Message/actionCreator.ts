import { DispatchType } from "..";
import { deleteNotification, receiveNotification } from "../../api/api";
import { messageSlice } from ".";

export class MessageActionCreator {
    receiveNotification = () => async (dispatch: DispatchType) => {
        try {
            const chatId = localStorage.getItem('chatId')
            const res = await receiveNotification()
            //  Если ответ не null
            if (res) {
                //  Проверка на то, что уведомление о получении сообщения
                if (
                    res.body.typeWebhook === 'incomingMessageReceived' 
                    // res.body.senderData.chatId === chatId

                ) {
                    const { pushMessage } = messageSlice.actions

                    const { textMessage } = res.body.messageData.textMessageData

                    const { timestamp } = res.body
                    const timeObj = new Date(timestamp)
                    const time = `${timeObj.getHours()}:${timeObj.getMinutes()}`

                    pushMessage({
                        text: textMessage,
                        time,
                        isSelf: false,
                    })
                    //  После получения уведомления его надо удалить
                    await deleteNotification(res.receiptId)
                }
            }
        } catch (error) {
            console.error()
        }
    }
}

