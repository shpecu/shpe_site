import { Parallax } from 'react-parallax';
import Nasa from '../assets/images/shpe_meeting_3.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={Nasa} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">guugugug</span>
        </div>
    </Parallax>
);

export default ImageOne