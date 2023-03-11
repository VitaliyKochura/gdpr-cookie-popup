import {useEffect} from 'react';

import 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import pluginConfig from './CookieConsentConfig';

function CookieConsent() {
    useEffect(() => {
        if (!document.getElementById('cc--main')) {
            document.body.classList.toggle('c_darkmode');
            window.CookieConsentApi = window.initCookieConsent();
            window.CookieConsentApi.run(pluginConfig);
        }
    }, []);

    return null;
}

export default CookieConsent;