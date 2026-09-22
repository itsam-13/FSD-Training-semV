import { useEffect, useState } from 'react'

function UseEffect() {
    const [counter, setCounter] = useState(0);
    const [pointer, setPointer] = useState(100);
    const [product, setProduct] = useState([]);

    useEffect(() => {
    //     console.log("Hey, I am from useEffect hook, counter=" + counter);
    //     console.log("Hey, I am from useEffect hook, pointer=" + pointer);
    // }, [counter, pointer]);

        async function fetchData(){
            try {
                const data = await fetch('https://fakestoreapi.com/products')
                const jsonData = await data.json()
                console.log(jsonData);
                setProduct(jsonData)
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    },[])



    return (
        <div>
            UseEffect
            <h2 style={{ color: '#fee8f6' }}>count = {counter}</h2>
            <h2 style={{ color: '#e1f' }}>pointer={pointer}</h2>
            <div></div>
            <button onClick={() => setCounter(counter + 10)}>Increment</button>
            <div></div>
            <button onClick={() => setPointer(pointer + 10)}>Increment Pointer</button>

            <div>
                {product.map((item) => (
                    <article key={item.id}>
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                    </article>
                ))}
            </div>


        </div>
    )
}

export default UseEffect;