export function pagination(query){
    const limit=Number(query.limit)||10
    const page=Number(query.page)||1
    const skip=(page-1)*limit
    return {skip,limit}
}