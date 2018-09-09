import Navbar from './Navbar';

export default ({ children }) => (
    <React.Fragment>
        <Navbar />
        {children}
    </React.Fragment>
)