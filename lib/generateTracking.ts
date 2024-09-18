export function generateTrackingNumber(): string {
    const charaters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let trackingNumber = ''
    for(let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * charaters.length)
        trackingNumber += charaters[randomIndex]
    }
    return trackingNumber
}