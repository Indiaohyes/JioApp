import React, { useState, useEffect } from 'react';

import axios, { URL } from '../../services/api'
import Service from '../../components/services';

const ServiceListingPage = ({ params }) => {
    const [services, setServices] = useState();

    useEffect(() => {
        axios
            .get(`/services/category/${params.category}`)
            .then(res => setServices(res.data.data.services))
            .catch(err => {
                console.log(err);
                setServices([]);
            });
    }, []);

    return (
        <main className='grid grid-cols-3 w-full gap-3 py-5 px-2' style={{ gridAutoColumns: '20rem' }}>
            {
                services
                    ? services.length
                        ? services.map((srv, i) => <Service data={srv} key={i} />)
                        : <h1>No data found</h1>
                        :`${console.log("loading..")}`
    
                         

            }
        </main>
    )
};

export default ServiceListingPage;