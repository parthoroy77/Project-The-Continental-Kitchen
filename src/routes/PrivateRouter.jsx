import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    if (loader) {
        return (<div className='d-flex justify-content-center align-content-center' style={{height: '300px'}}>
            <div className='mt-5'>
                <ClipLoader
                    className='text-center mt-5'
                    loading={loader}
                    cssOverride={{ textAlign: 'center' }}
                    size={100}
                    aria-label="Loading Spinner"
                    color="#36d7b7" />
            </div>
        </div>)
    }
    if (user) {
        return children;
    }
    const location = useLocation()
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRouter;