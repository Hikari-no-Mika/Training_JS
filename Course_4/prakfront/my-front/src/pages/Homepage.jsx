import {ApartmentList} from '../components/ApartmentList';
import {useState} from 'react';
import defaultApartments from '../mock/apartment.json';

export const Homepage = () => {

    const [flats, setFlats] = useState(defaultApartments);

    return (
        <>
            <h1>Каталог</h1>
            <ApartmentList items={flats}/>
        </>
    )
}


// <Apartment
//     id={'12'}
//     title={'qqq'}
//     city={'qqq'}
//     address={'qqq'}
//     rooms={'qqq'}
//     price={'qqq'}
//     description={'qqq'}
//     image={'qqq'}
// />