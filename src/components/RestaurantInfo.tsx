import {
    Card,CardContent,CardDescription,CardHeader,CardTitle,} from "@/components/ui/card"
import { Restaurant } from "@/types";

type Props={
    restaurant:Restaurant;
}


const RestaurantInfo =({restaurant}:Props) =>{
    return (
<Card  >
<CardHeader>
    <CardTitle className="text-3xl font-bold">{restaurant.restaurantName}</CardTitle>
    <CardDescription>{restaurant.city},{restaurant.country}</CardDescription>
</CardHeader>
<CardContent>
{restaurant.cuisines.join(' • ' )}
</CardContent>

</Card>
    )
}

export default RestaurantInfo