import './index.scss'

type propsType = {
    text: string
    time: string
    isSelf: boolean
}

export const Message = ({ text, time, isSelf }: propsType) => {
    
    const className = ['message']

    if (!isSelf) className.push('message-other')

    return (   
        <div className={className.join(' ')}>
            <div className='message__text'>
                {text}
            </div>
            <div className='message__time'>
                {time}
            </div>

        </div>
    )
}