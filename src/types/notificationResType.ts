export type notificationResType = {
    receiptId: number
    body: Body
}

type Body = {
    typeWebhook: string
    instanceData: InstanceData
    timestamp: number
    idMessage: string
    senderData: SenderData
    messageData: MessageData
}

type InstanceData = {
    idInstance: number
    wid: string
    typeInstance: string
}

type SenderData = {
    chatId: string
    chatName: string
    sender: string
    senderName: string
}

type MessageData = {
    typeMessage: string
    textMessageData: TextMessageData
}

type TextMessageData = {
    textMessage: string
}