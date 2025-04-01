import './welcome.css'

function welcome() {
    let day = new Date().getDay();
    let date = new Date().toLocaleDateString();
    let welcomeMessage;
    switch(day) {
        case 0: welcomeMessage = "Happy Sunday! Relax and enjoy your day!";
                break;
        case 1 : welcomeMessage = "Happy Monday! A fresh start to the week!";
                break;
        case 2: welcomeMessage = "Happy Tuesday! Keep going, you're doing great!";
                break;
        case 3: welcomeMessage = "Happy Wednesday! Halfway through the week!";
                break;
        case 4: welcomeMessage = "Happy Thursday! Almost there!";
                break;
        case 5 : welcomeMessage = "Happy Friday! The weekend is near!";
                break;
        case 6 : welcomeMessage = "Happy Saturday! Time to unwind!";
        break;
    }
    return (
        <div class="welcome">
            <p>{date}</p>
            <p>{welcomeMessage}</p>
        </div>
    );
}

export default welcome;