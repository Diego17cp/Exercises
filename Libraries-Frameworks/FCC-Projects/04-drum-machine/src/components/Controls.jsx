export const Controls = () => {
	return (
		<section className="controls-container">
			<div className="control">
				<p>Power</p>
				<div className="select">
					<div className="switch"></div>
				</div>
			</div>
			<p className="display"></p>
			<div className="volume-slider">
				<input
					type="range"
					name="volume-slider"
					id="volume-control"
					max="1"
					min="0"
					step="0.1"
					value={volume}
				/>
			</div>
			<div className="control">
				<p>Bank</p>
				<div className="select">
					<div className="switch"></div>
				</div>
			</div>
		</section>
	);
};
