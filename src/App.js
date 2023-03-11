import {Spinner} from 'react-bootstrap';
import CookieConsent from './components/CookieConsent';

function App() {
    return (
        <>
            <CookieConsent/>
            <Spinner animation="border" role="status"
                     style={{width: '3rem', height: '3rem', position: 'fixed', top: '50%', left: '50%'}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    );
}

export default App;
