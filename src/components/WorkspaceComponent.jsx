import ProgressBar from "./ProgressBarComponent";
// import DescriptionComponent from "./DescriptionComponent";

export default function WorkspaceComponent(props) {
    return (
        <div className="workspace" onClick={props.onClick} key={props.key}>
            <div className="content">
                <h1 className="title">{props.title}</h1>
                <div className="description">
                    <p>{props.description}</p>
                </div>
                {/* <DescriptionComponent></DescriptionComponent> */}
                <ProgressBar></ProgressBar>
            </div>
        </div>
    );
}
