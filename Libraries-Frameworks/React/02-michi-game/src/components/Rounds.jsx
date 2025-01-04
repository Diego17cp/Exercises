// import PropTypes from "prop-types";
import { Square } from "./Square";
import { turns } from "../constants";

export const Rounds = () => {
    return (
        <section className="round">
            <h2>Rounds won</h2>
            <div className="row">
                <Square>{turns.X}</Square>
                <Square>{turns.O}</Square>
            </div>
            <hr />
            <div className="row score">
                <Square></Square>
                <Square></Square>
            </div>
        </section>
    )
}