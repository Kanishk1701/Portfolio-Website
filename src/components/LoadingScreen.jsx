import { useEffect, useState } from "react";

export const LoadingScreen = ({ onLoadingComplete }) => {
    const [text, setText] = useState("");
    const [visible, setVisible] = useState(true);
    const fullText = "Kanishk // Developer";

    useEffect(() => {
        let index = 0;
        
        // First phase: Type the text character by character
        const typingInterval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if(index > fullText.length) {
                clearInterval(typingInterval);
                
                // Second phase: Wait a moment and then fade out
                setTimeout(() => {
                    setVisible(false);
                    // Call the callback function to notify parent component
                    if (onLoadingComplete) {
                        onLoadingComplete();
                    }
                }, 1500); // Wait 1.5 seconds after typing completes before disappearing
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []); 

    // If not visible, don't render anything
    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}
                <span 
                    className="ml-1 inline-block w-2 bg-white" 
                    style={{ animation: "blink 1s step-end infinite" }}
                >|</span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded-full relative overflow-hidden">
                <div 
                    className="absolute w-1/3 h-full bg-blue-500 rounded-full" 
                    style={{ 
                        boxShadow: "0 0 15px #3b82f6",
                        animation: "loading 2s linear infinite"
                    }}
                >
                    {""}
                </div>
            </div>
            
            {/* Define the animations using inline styles */}
            <style jsx>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                
                @keyframes loading {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
            `}</style>
        </div>
    );
};