import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/tagBadge.css'

function TagBadge({tag}){
    return(
        <div className='bg-warning px-2 rounded d-flex align-items-center gap-1 tag fw-semibold'>
            <p>{tag}</p>
        </div>
    );
}

export default TagBadge