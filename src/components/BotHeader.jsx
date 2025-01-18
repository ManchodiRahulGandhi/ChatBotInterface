import React from 'react';

function BotHeader({ onClose }) {
    return (
        <div className="botHeader">
            <span>React Chatbot</span>
            <button onClick={onClose} className="close-button">
                Close
            </button>
        </div>
    );
}

export default BotHeader;
