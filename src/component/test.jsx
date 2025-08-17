import { useEffect, useState } from "react";

const APIIntegration = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                
                data.products.forEach(product => console.log(product));

                setImages(data.products.flatMap(product => product.thumbnail));
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        getData();
    }, []);

    return (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            {images.map((img, index) => (
                <img key={index} src={img} alt={`Product ${index}`} style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "10px" }} />
            ))}
        </div>
    );
};

export default APIIntegration;
