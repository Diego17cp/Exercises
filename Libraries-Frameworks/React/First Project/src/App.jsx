// import "./App.css";
import { TwitterFollowCard } from "./Components/TwitterFollowCard.jsx";

export const App = () => {
	// Pass a function as a prop to the TwitterFollowCard component
	const formatUsername = (userName) => `@${userName}`;
    // Pass am element as a prop
    // const formattedUsername=(<span>@{userName}</span>)
    const users=[
        {
            userName:"Diego_CP17",
            name:"Diego17"
        },
        {
            userName:"reactjs",
            name:"React"
        },
        {
            userName:"midudev",
            name:"Midu Dev"
        },
        {
            userName:"astrodotbuild",
            name:"Astro"
        }
    ]
	return (
		<section className="tw-app">
			{
                users.map(user=>{
                    const { userName, name } = user;
                    return(
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            name={name}
                            formatUsername={formatUsername}
                        />
                    )
                })
            }
		</section>
	);
};
