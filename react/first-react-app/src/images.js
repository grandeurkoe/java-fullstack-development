import beautiful from './images/beautiful.jpg'
import construction from './images/construction.jpg'
import './images.css'
import Caption from './caption'
import Description from './description'

function images() {
    return (
        <div class="imgContainer">
            <div class="myImages">
                <img src= {beautiful}></img>
                <img src= {construction}></img>
            </div>
            <Caption />
            <Description />          
        </div>
    );
}

export default images;