import { DispatchType } from "..";
import { deleteNotification, receiveNotification } from "../../api/api";
import { messageSlice } from ".";

// export const MessageActionCreator = {
export const receiveNotificationAC = () => async (dispatch: DispatchType) => {
    try {
        const chatId = localStorage.getItem('chatId')
        const data = await receiveNotification()
        const res = data?.data
        //  Если ответ не null
        if (res) {
            //  Проверка на то, что уведомление о получении сообщения
            //  и уведомление от того номера, который указали при входе
            if (
                res.body.typeWebhook === 'incomingMessageReceived' &&
                res.body.senderData.chatId === chatId

            ) {
                const { pushMessage } = messageSlice.actions
                let text
                text = res.body.messageData?.textMessageData.textMessage
                if (res.body.messageData.typeMessage === "extendedTextMessage") {
                   // @ts-ignore
                    text = res.body.messageData.extendedTextMessageData.text
                }

                const { timestamp } = res.body
                const timeObj = new Date(timestamp)
                const time = `${timeObj.getHours()}:${timeObj.getMinutes()}`

                dispatch(pushMessage({
                    text: text,
                    time,
                    isSelf: false,
                }))
            }
            //  После получения уведомления его надо удалить
            await deleteNotification(res.receiptId)
        }
        //  Как только приходит ответ и если его статус 200
        //  рекурсивно отправляем запрос
        if (data?.status === 200) {
            dispatch(receiveNotificationAC())
        }
    } catch (error) {
        console.error()
    }
}
// }

