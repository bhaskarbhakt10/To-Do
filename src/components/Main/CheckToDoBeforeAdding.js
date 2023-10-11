const check = (list, data) => {
    if(list !== "" && data.length === 0){
        return true;
    }
    if(list !== "" && data.length > 0){
        if(data.includes(list)){
            return "Already exists in todo List"
        }
        else{
            return true;
        }
    }
}
export default check;