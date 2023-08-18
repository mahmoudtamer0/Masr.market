import './proddet.css'
export default function Stars(props) {

    const stars = props.stars

    const ratingstar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {

                    stars >= index + 1 ?
                        (<i className="fa-solid fa-star"></i>)

                        : stars >= number ?
                            (<i className="fa-solid fa-star-half-stroke"></i>)
                            : <i className="fa-regular fa-star"></i>
                }
            </span>
        )
    })

    return (

        <div className='stars'>
            {ratingstar}
        </div>
    )


}