export function sortBuilder(query){
    let value=-1
    if(query.order==='asc'){
        value=1
    }
    const sorter={name:{name:value},
                  avg_rating:{"stats.avg_rating":value},
                  price:{price:value}}
    return sorter[query.sort]||{}
}