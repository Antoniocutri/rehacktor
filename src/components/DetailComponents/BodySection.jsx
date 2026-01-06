import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import supabase from "../../database/supabase"

export default function BodySection({game, profile_id}){

    const [isFavourite, setIsFavourite] = useState(false)
    const [description, setDescription] = useState()
    const [gameReviews, setGameReviews] = useState()
    const [checkReview, setCheckReview] = useState(false)

    const handle_description = (e) =>{
        setDescription(e.target.value)
    }

    const get_reviews = async () => {
        let { data: reviews, error } = await supabase
            .from("reviews")
            .select('*')
            .eq("game_id",game.id);

        setGameReviews(reviews);
    }

    const add_reviews = async () => {
        const { data, error } = await supabase
            .from("reviews")
            .insert([
                { profile_id, game_id: game.id, game_name: game.name, description },
            ])
            .select();

        setDescription("");
        setCheckReview( !checkReview)
    }

    const get_favourite = async () =>{
        let { data: favourites, error } = await supabase
            .from("favourites")
            .select("*")
            .eq("profile_id", profile_id)
            .eq("game_id",game.id);
        
            if (favourites.length > 0) {
                setIsFavourite(true)
            }
    }

    useEffect(
        ()=>{
            get_favourite();
            get_reviews()
        },[checkReview]
    )

    const add_game = async () => {
        const { data, error } = await supabase
            .from("favourites")
            .insert([{ profile_id, game_id: game.id, game_name: game.name } ])
            .select();
        setIsFavourite(true);
    }

    const remove_game = async () =>{
        const { error } = await supabase
            .from("favourites")
            .delete()
            .eq("profile_id", profile_id)
            .eq("game_id",game.id);
        setIsFavourite(false);
    };

    return (
        <section className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-6 gap-10">
            
            <div className="lg:col-span-5">
                
                <h3 className="text-2xl font-bold text-white mb-4">
                    Reviews
                </h3>

                <textarea
                    className="w-full lg:w-2/3 min-h-[120px] rounded-xl textarea textarea-primary textarea-ghost bg-black/50 text-white"
                    placeholder="Type your review..."
                    onChange={handle_description}
                    value={description}
                />

                <button
                    className="btn btn-primary w-1/2 mt-4 mx-auto px-6 py-3 rounded-xl font-semibold"
                    onClick={add_reviews}
                >
                    Invia recensione
                </button>

                <div className="my-8 max-h-[250px] overflow-y-auto space-y-3 pr-2">
                    {gameReviews &&
                    gameReviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-black/40 border border-gray-700 rounded-lg p-3 text-white text-sm">
                            {review.description}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center lg:justify-start items-start pt-10">
                {isFavourite && (
                    <FaHeart
                        className="text-red-500 cursor-pointer text-4xl hover:scale-110 transition-transform"
                        onClick={remove_game}
                    />
                ) || (
                    <FaRegHeart
                        className="text-red-500 cursor-pointer text-4xl hover:scale-110 transition-transform"
                        onClick={add_game}
                    />
                )}
            </div>
        </section>
    );
}