import { SyntheticEvent, useState } from "react";
import styles from "./Chatbot.module.css";

type ChatData = {
    query: undefined | string;
    response: undefined | string;
};

// Chatbot launches a chat interface.
const Chatbot = () => {
    const [chat, setChat] = useState<ChatData>({
        query: undefined,
        response: undefined,
    });

    const defaultMessage =
        "Forget sifting through haystacks of information, query directly for targeted and insightful results.";

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const query = formData.get("query");

        if (!query) return;

        setChat({ query: query.toString(), response: undefined });

        form.reset();

        // TODO: submit query and get response.
        setTimeout(() => {
            const response = "This text";

            setChat(prev => {
                prev.response = response;
                return { ...prev };
            });
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Hexane</span>
            </div>

            <div className={styles.chatSection}>
                {chat.query ? (
                    <DisplayResponse chat={chat} />
                ) : (
                    <div className={styles.defaultMessage}>
                        <span>{defaultMessage}</span>
                    </div>
                )}
            </div>

            <form className={styles.input} onSubmit={handleSubmit}>
                <input required name="query" />
                <button type="submit">query</button>
            </form>
        </div>
    );
};

const DisplayResponse = ({ chat }: { chat: ChatData }) => {
    const { query, response } = chat;

    return (
        <div className={styles.responseContainer}>
            <details className={styles.query}>
                <summary>Query</summary>
                <span>{query}</span>
            </details>
            <div className={styles.responseMessage}>
                <span>{response ?? "loading..."}</span>
            </div>
        </div>
    );
};

export default Chatbot;
