import "../Task.css"

export default function TaskInspector(props){
    return(
        <div className="task-container">
            <div className="new"></div>
            <div className="in-progress"></div>
            <div className="finished"></div>
        </div>
    )
}