import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRouter;