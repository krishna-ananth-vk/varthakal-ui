import { useHistory } from 'react-router-dom';
import './pageLoadingAnimation.css';
import { useEffect } from 'react';
import { PAGE_ROUTES } from '../../utils/constants';


const PageLoadingAnimation = () => {
    const history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {
            history.push(PAGE_ROUTES.NEWS);
        }, 3000);

        return () => clearTimeout(timer);
    }, [history]);
    return (
        <div className="animationBody">
        <div className="loader"></div>
        
    </div>
    );
};

export default PageLoadingAnimation;
