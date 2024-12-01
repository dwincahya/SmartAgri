import { useNavigate, useLocation } from 'react-router-dom';

const useHandleLinkClick = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLinkClick = (path, scrollTo) => {
        if (path === "back") {
            navigate(-1);
        } else if (location.pathname === path) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate(path);
            if (scrollTo) {
                setTimeout(() => {
                    const section = document.getElementById(scrollTo);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 200);
            }
        }
    };

    return handleLinkClick;
};

export default useHandleLinkClick;
