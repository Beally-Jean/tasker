import WorkspaceComponent from "./WorkspaceComponent";
import FooterComponent from "./FooterComponent";
import HintComponent from "./HintComponent";
import { useState } from "react";
// import TaskInspector from "./TaskInspectorComponent";
import Tasker from "./Tasker";
import ico from "./ico.png";

// import { ReactDOM } from "react";

export default function HomeComponent(props) {
    const [hint, setHint] = useState(["some"]);
    const [components, setComponents] = useState([]);
    const [spaceTitle, setSpaceTitle] = useState("");
    const [spaceDescribtion, setSpaceDescribtion] = useState("");
    const [dnone, setDnone] = useState("flex");
    const [tnone, setTnone] = useState("none");
    const [inspector, setInspector] = useState([]);
    const [todos, setTodos] = useState([]);
    let count = 0;
    let spaces = window.localStorage.getItem("spaces");
    spaces = spaces ? JSON.parse(spaces) : [];
    if (!Array.isArray(spaces)) spaces = [];
    window.localStorage.setItem("spaces", JSON.stringify(spaces));
    function addWorkspace() {
        setComponents([
            ...components,
            { title: spaceTitle, description: spaceDescribtion },
        ]);
        window.localStorage.setItem(
            "spaces",
            JSON.stringify({ title: spaceTitle, description: spaceDescribtion })
        );
        setSpaceTitle("");
        setSpaceDescribtion("");
        setHint([]);
    }
    function gotoTasks() {
        setDnone("none");
        setTnone("flex");
        setInspector(...inspector, [""]);
    }
    function goBack() {
        setDnone("flex");
        setTnone("none");
        // setInspector(...inspector, [""]);
    }
    return (
        <>
            <button className="back" onClick={goBack}>
                Назад
            </button>
            <div className="container" style={{ display: dnone }}>
                <header>
                    <img src={ico} alt="" />
                    <input
                        type="text"
                        placeholder="Название"
                        className="title"
                        value={spaceTitle}
                        onChange={(e) => setSpaceTitle(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Описание"
                        className="description"
                        value={spaceDescribtion}
                        onChange={(e) => setSpaceDescribtion(e.target.value)}
                    />
                </header>
                {hint.map((item, i) => (
                    <HintComponent />
                ))}
                <section className="main">
                    {components.map((item, i) => (
                        <WorkspaceComponent
                            title={item.title}
                            description={item.description}
                            onClick={gotoTasks}
                        />
                    ))}
                </section>
                <div className="wrapper">
                    <FooterComponent onClick={addWorkspace}></FooterComponent>
                </div>
            </div>

            <div style={{ display: tnone }}>
                <Tasker></Tasker>
            </div>
        </>
    );
}
