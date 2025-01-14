import { useBank } from "../hooks/useBank";
import { useDisplay } from "../hooks/useDisplay";
import { usePower } from "../hooks/usePower";
import { useVolume } from "../hooks/useVolume";

export const Controls = () => {
	const { power, togglePower } = usePower();
	const { volume, adjustVolume } = useVolume();
	const { bank, toggleBank } = useBank();
	const { display } = useDisplay();

	return (
		<section className="controls-container">
			<div className="control">
				<p>Power</p>
				<div className="select" onClick={togglePower}>
					<div className="switch" style={
                        {
                            transform: power ? 'rotate(0deg)' : 'rotate(180deg)',
                        }
                    }>
                        <span className="indicator"></span>
                    </div>
				</div>
			</div>
			<p className="display">{display}</p>
			<div className="volume-slider">
				<input
					type="range"
					name="volume-slider"
					id="volume-control"
					max="1"
					min="0"
					step="0.1"
					value={volume}
                    onChange={adjustVolume}
				/>
			</div>
			<div className="control">
				<p>Bank</p>
				<div className="select" onClick={toggleBank}>
					<div className="switch" style={
                        {
                            transform: bank === 'Heater Kit' ? 'rotate(0deg)' : 'rotate(180deg)',
                        }
                    }>
                        <span className="indicator"></span>
                    </div>
				</div>
			</div>
		</section>
	);
};
