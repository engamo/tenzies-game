import PropTypes from 'prop-types';
import './App.css'

const Die = (props) => {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    };

    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    );
};

Die.propTypes = {
    isHeld: PropTypes.bool,
    holdDice: PropTypes.func,
    value: PropTypes.number.isRequired,
};

export default Die;
