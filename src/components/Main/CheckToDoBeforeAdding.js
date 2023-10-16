const check = (list, data, PrevItemCount) => {
    if(list !== "" && data.length === 0){
        return true;
    }
    if(list !== "" && data.length > 0){
        if(data.includes(list)){
            return "Already exists in todo List"
        }
        else if(PrevItemCount.currentCount > PrevItemCount.limit){
            return `To list item can not exceed than the set limit. Current limit is ${PrevItemCount.limit}`;
        }
        else{
            return true;
        }
    }
}
export default check;