import Nav from "../components/nav/nav"
import LatestMeals from "../components/LatestMeals/LatestMeals"
import Popular_Ingredients from "../components/PopularIngredients/Popular_Ingredients"
import Random_Meals from "../components/RandomMeals/Random_Meals"
import Random_Ingredients from "../components/RandomIngredients/Random_Ingredients"

const Home = () => {
  return (
    <div>
      <Nav />
      <LatestMeals />
      <Popular_Ingredients />
      <Random_Meals />
      <Random_Ingredients />
    </div>
  )
}

export default Home