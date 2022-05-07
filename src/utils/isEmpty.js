function emptyHelper(value) {
    return (
        value === null ||
        value.length === 0 ||
        (typeof value === "object" && Object.keys(value).length === 0)
    )
}

export const isEmpty =(value) => {
    if(value == null) {
        return true
    }
    if(typeof value === "object") {
        return  Object.keys(value).length === 0
    }
    return value.length === 0
}