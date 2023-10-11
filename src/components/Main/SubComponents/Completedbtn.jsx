function Completed(props){
    const { id, onCompleted, value } = props; 
    return(
        <>
        <input type="checkbox" id={id} onChange={onCompleted} value={value}/>
        </>
    )
}
export default Completed