export default function HeaderComponent(props) {
    return (
        <header>
            <input type="text" placeholder="Название" className="title" value={props.input_title}/>
            
            <input type="text" placeholder="Описание" className="description" value={props.input_description}/>
        </header>
    );
}
