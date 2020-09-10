export const retrieveMerch = async () => {
    const res = await fetch('/api/v1/merch');
    try {
        const data = await res.json();
        return data.merchData;
    }catch(err) {
        console.log('Error: ', err);
    }
}