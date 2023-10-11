function Delete( props){

    const {onDelete} = props;



    return(
        <>
        <button onClick={onDelete} className="btn-todo btn btn-del-todo">Delete</button>
        </>
    )
}
export default Delete