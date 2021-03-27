export default (product =[],action)=>{
 
switch (action.type) {
    case 'FETCH_ALL':
        return action.payload;
    case 'CREATE':
        return [... product,action.payload];
    default: 
        return product;
}


}