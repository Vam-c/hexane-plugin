import { useState } from "react";
import styles from "./App.module.css";
import Chatbot from "./components/Chatbot";

const App = () => {
    // hide state hides the Chatbot interface.
    const [hide, setHide] = useState(true);

    return (
        <>
            {!hide && <Chatbot />}

            {/* Chat icon to toggle chat interface. */}
            <div id="chat-icon" className={styles.chatIcon} onClick={() => setHide(!hide)}>
                <span>H</span>
            </div>
        </>
    );
};

export default App;
