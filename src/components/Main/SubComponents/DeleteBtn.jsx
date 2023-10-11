function Delete( props){

    const {onDelete} = props;



    return(
        <>
        <button onClick={onDelete}>Delete</button>
        </>
    )
}
export default Delete