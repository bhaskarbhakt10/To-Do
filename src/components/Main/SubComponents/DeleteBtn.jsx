import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Delete( props){

    const {onDelete, deleteIcon} = props;



    return(
        <>
        <button onClick={onDelete} className="btn-todo btn btn-del-todo"><FontAwesomeIcon icon={deleteIcon} /></button>
        </>
    )
}
export default Delete