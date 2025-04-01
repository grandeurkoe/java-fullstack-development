import './welcome.css'

function welcome(props) {
    return (
        <div class="welcomeContainer">
            <p>Welcome, {props.name}</p>
        </div>
    );
}

export default welcome;