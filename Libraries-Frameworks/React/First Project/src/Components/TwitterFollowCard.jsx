import "./TwitterFollowCard.css";
import { useState } from "react";
import PropTypes from 'prop-types'

export const TwitterFollowCard = ({
	formatUsername,
	userName = "unknow",
	name,
}) => {
	const imgSrc = `https://unavatar.io/x/${userName}`;
	const [isFollowing, setIsFollowing] = useState(false);
	const followText = isFollowing ? "Following" : "Follow";
	const btnClass = isFollowing ? "tw-btn-following" : "tw-btn-follow";
	const handleClick = () => setIsFollowing(!isFollowing);

	return (
		<article className="tw-profile-card">
			<header className="tw-profile-card-header">
				<img
					className="tw-profile-pic"
					src={imgSrc}
					alt="Diego17 Avatar"
				/>
				<div className="tw-profile-info">
					<strong>{name}</strong>
					<span>{formatUsername(userName)}</span>
				</div>
			</header>

			<aside className="tw-btn-container">
				<button className={btnClass} onClick={handleClick}>
					<span className="tw-btn-text">{followText}</span>
                    <span className="tw-btn-unfollow">Unfollow</span>
				</button>
			</aside>
		</article>
	);
};

TwitterFollowCard.propTypes = {
	formatUsername: PropTypes.func.isRequired,
	userName: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}