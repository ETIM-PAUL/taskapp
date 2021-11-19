import {useState} from "react";

const AddTask = ({moreTask}) => {
    const [content, setContent] = useState('');
    const [day, setDay] = useState ('');
    const [reminder, setReminder] = useState(false);
    
    const onSubmit = (e) => {
        e.preventDefault()
        
        if(!content){
            alert('Please add a task');
            return
        }
        if(!day){
            alert('Please add a date');
            return
        }
        moreTask({ content, day, reminder})
            setContent('')
            setDay('')
            setReminder(false)
        }         

    return (
        <form className="add-form" onSubmit = {onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input 
                 type='text' 
                 placeholder='Add Task' 
                 value={content}
                 onChange={(e) => setContent(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time </label>
                <input 
                    type='text' 
                    placeholder='Add Day & Time' 
                    value={day}
                    onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
           <input type='submit' value='Save task'
           className='btn btn-block' />
        </form>
    )
}

export default AddTask;