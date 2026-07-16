export function filterBuilder(query){
    const filter={isDeleted:false}
    if(query.name!==undefined){
        filter.name=query.name
    }
    if(query.city!==undefined){
        filter.city=query.city
    }
    if(query.isVeg!==undefined){
        filter.isVeg=query.isVeg==='true'
    }
    if(query.category!==undefined){
        filter.category=query.category
    }
    if(query.cuisines){
        filter.cuisines={$in:query.cuisines.split(',')}
    }
    if(query.min_price!==undefined){
        filter.price={$gte:Number(query.min_price)}
    }
    if(query.availability==='Available' || query.availability==='Not Available'){
        filter.availability=query.availability
    }
    if(query.min_rating!==undefined){
        filter["stats.avg_rating"]={$gte:Number(query.min_rating)}
    }
    return filter
}