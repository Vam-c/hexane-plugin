import { SyntheticEvent, useState } from "react";
import styles from "./Chatbot.module.css";

// Chatbot launches a chat interface.
const Chatbot = () => {
    const [chats, setChats] = useState<string[]>([]);

    const defaultMessage =
        "Forget sifting through haystacks of information, query directly for targeted and insightful results.";

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const { query } = Object.fromEntries(formData.entries());

        // TODO: submit query and get response.
        const response = "This text";

        setChats(prev => [...prev, response]);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Hexane</span>
            </div>

            <div className={`${styles.chatSection} ${styles.center}`}>
                <span>{defaultMessage}</span>
            </div>

            <form className={styles.input} onSubmit={handleSubmit}>
                <input required name="query" />
                <button type="submit">query</button>
            </form>
        </div>
    );
};

export default Chatbot;
