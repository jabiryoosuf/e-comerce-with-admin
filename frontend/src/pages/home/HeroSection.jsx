import card1 from "../../assets/card-1.png"
import card2 from "../../assets/card-2.png"
import card3 from "../../assets/card-3.png"
const cards = [
    {
        id:1,
        image:card1,
        trend:'2024 Trends',
        title:'Womens T-shirts'
    },
    {
        id:2,
        image:card2,
        trend:'2024 Trends',
        title:'Womens T-shirts'
    },
    {
        id:3,
        image:card3,
        trend:'2024 Trends',
        title:'Womens T-shirts'
    },
]


const HeroSection = () => {
  return (
    <section className="section__container header__container">
      {
        cards.map((cards)=>(
            <div key={cards.id} className="hero__card">
                    <img src={cards.image} alt="" />
                    <div className="hero__content">
                        <p>{cards.trend}</p>
                        <h4>{cards.title}</h4>
                        <a href="#">Discover More</a>
                    </div>
            </div>
        ))
      }
    </section>
  )
}

export default HeroSection
