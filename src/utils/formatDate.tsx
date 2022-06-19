export const formatDate = (date: string) => {
    const dateObj = new Date(date)
    return dateObj.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}