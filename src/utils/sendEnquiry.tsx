type Values = {
    name: string,
    email: string,
    message: string
}


export const sendEnquiry = async (values: Values) => {
    try {
        const res = await fetch('/api/enquiry', {
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
        })
        const { error } = await res.json()
        return error || false
    } catch (err) {
        return { message: 'Something went wrong...'}
    }
}