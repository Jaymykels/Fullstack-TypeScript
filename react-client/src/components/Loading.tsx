import React from 'react';

export interface LoadingProps {
    
}
 
const Loading: React.SFC<LoadingProps> = () => {
    return ( 
        <h1 className="text-gray-800 text-center lg:pl-10 lg:text-4xl text-xl font-semibold">
            Loading...
        </h1>
    );
}
 
export default Loading;