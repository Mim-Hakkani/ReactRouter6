import React, { useContext } from 'react';
import { ContextValue } from './Context/Context';

const Page3 = () => {
    const info = useContext(ContextValue);
    // console.log('company details :',info);
    return (
        <div>
           {
               info.map(item=><div className="div" key={item.id}>
                   Company : {item?.name}
                   Location : {item?.location}
               </div>)
           }
        </div>
    );
};

export default Page3;