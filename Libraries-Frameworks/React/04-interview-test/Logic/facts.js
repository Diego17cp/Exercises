import { CAT_ENDPOINT_FACT_URL } from "../constants/consts"


export const getRandomFact = async () => {
    const response = await fetch(CAT_ENDPOINT_FACT_URL)
    const data = await response.json()
    const {fact} = data
    return fact
}

export const getCatImage = async (fact) => {
    const firstThreeWords=fact.split(' ', 3).join(' ')
    const data_2 = await fetch(`https://cataas.com/cat/says/${firstThreeWords}?font=Verdana&fontSize=30&fontColor=%23fff&fontBackground=none&position=center&width=300&height=300`)
    const { url } = data_2
    return url
}