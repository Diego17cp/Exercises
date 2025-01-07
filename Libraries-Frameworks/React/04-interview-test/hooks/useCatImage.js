import { useEffect, useState } from 'react';
import { getCatImage } from '../Logic/facts';

export const useCatImage = ({fact}) => {
    const [imgUrl, setImgUrl] = useState()
    useEffect(() => {
        if (!fact) return
        getCatImage(fact).then(newImgUrl => setImgUrl(newImgUrl))
    }, [fact])

    return { imgUrl }
}