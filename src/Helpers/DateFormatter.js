export const dateFormat = (date) => {
    let d = date.getDate()
    if (d <= 9) {
        d = '0' + d
    }
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const MonthName = months[date.getMonth()]
    return d + "-" + MonthName + "-" + date.getFullYear()
};