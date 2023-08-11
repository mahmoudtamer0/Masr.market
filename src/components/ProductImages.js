import { useEffect, useState } from "react";



const ProductImages = ({ imgs = [{ url: "" }] }) => {
    const [imgscounter, setImgscounter] = useState(0)


    return (
        <div>
            {imgs ? <div><img src={imgs[imgscounter].url} style={{ width: 200, height: 200 }} /></div> : console.log('mo')}
            {imgs ? imgs.map((img, index) => {
                return (
                    <img
                        key={index}
                        style={{ width: 50, height: 50 }}
                        src={img.url}
                        onClick={() => setImgscounter(index)}
                    />
                )
            }) : null}
        </div>
    )
}

export default ProductImages;