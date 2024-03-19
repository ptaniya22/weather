export function getTime(param) {
    return new Date().toLocaleString('ru-RU', {
        timeZone: param.timezone,
        timeStyle: 'short',
        hourCycle: 'h23'
    })
}