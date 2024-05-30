'use client';

export default function Button() {
    console.log("Button component");
    const handleButtonClick = () => {
        console.log("Button clicked");
    };
    return (
        <button onClick={handleButtonClick}>Click me</button>
    );
}