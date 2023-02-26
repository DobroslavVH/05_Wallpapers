const oneSec = 1000
const oneMin = 60 * oneSec

export const time = [
    { name: '1s', value: oneSec },
    { name: '30s', value: oneSec * 30 },
    { name: '60s', value: oneMin },
    { name: '5m', value: oneMin * 5 },
    { name: '15m', value: oneMin * 15 },
    { name: '30m', value: oneMin * 30 },
    { name: '1h', value: oneMin * 60 },
    { name: '2h', value: oneMin * 120 }
]